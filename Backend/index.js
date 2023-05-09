const express = require('express'); 
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoute = require('./Router/auth');
const adminRoute = require('./Router/admin');
const movieRoute =  require('./Router/movie');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const Movie = require('./Models/Movie');
const User = require('./Models/User');

dotenv.config();
const app = express()

const DEFAULT_ADMIN = {
    email: 'admin@example.com',
    password: 'password',
  }
AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})
const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN)
    }
    return null
}

async function run() {
  const mongooseDb = await mongoose.connect(process.env.MONGODB_URL, { dbName: 'AnimeMovie' }).then((mongooseDb) => {
    console.log("Connect MongooDB successfully!");
    return mongooseDb
  })
  const admin = await new AdminJS({
    databases: [mongooseDb],
    // resources:[User, Movie]
  })
  // console.log(admin);

  const sessionStore = await mongoose.connect(process.env.MONGODB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(() => console.log("Session Store connected."))
  .catch((err) => console.log(err));
 

  const adminRouter = await AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
        authenticate,
        cookieName: 'adminjs',
        cookiePassword: 'sessionsecret',
    },
    null,
    {
        store: sessionStore,
        resave: true,
        saveUninitialized: true,
        secret: 'sessionsecret',
        cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
        },
        name: 'adminjs',
    }
    )

  app.use(admin.options.rootPath, adminRouter)
  app.listen(3000, () => {
      console.log(`AdminJS started on http://localhost:3000${admin.options.rootPath}`)
  })
  app.use(cors());
  app.use(cookieParser()); 
  app.use(express.json());



  // Route 
  app.use("/v1/auth",authRoute);
  app.use("/v1/admin",adminRoute);
  app.use("/v1/movie",movieRoute);

  app.listen(8000 , () => {
      console.log('Server is runnning');
  })
}
run()



