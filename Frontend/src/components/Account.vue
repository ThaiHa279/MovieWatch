<template>
  <div>
    <div class="aw_sign_in_register">
      <ul>
        <li><font-awesome-icon :icon="['fas', 'phone']" /> (+000) 123 345 653</li>
        <li>
          <div style="display: block;" v-if="name!=''">Xin chào <span>{{ name }}</span></div>
          <a v-else href="#" data-toggle="modal" data-target="#myModal">Login</a>
        </li>
      </ul>
    </div>
    <div class="modal video-modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					Sign In & Sign Up
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
				</div>
				<section>
					<div class="modal-body">
						<div class="aw_login_module">
							<div class="module form-module">
							  <div class="toggle" @click="toggleClick"><font-awesome-icon :icon="['fas', 'pencil']" />
								<div class="tooltip">Click Me</div>
							  </div>
							  <div class="form">
								<h3>Login to your account</h3>
								<!-- <form @submit="handleLogin(data)" method="post">
								  <input type="text" name="Username" placeholder="Username" required="">
								  <input type="password" name="Password" placeholder="Password" required="">
								  <input type="submit" value="Login">
								</form> -->
                <Form
                    @submit="handleLogin"
                >
                    <div class="form-group">
                        <Field
                            placeholder="Username"
                            name="Username"
                            type="text"
                            class="form-control"
                            v-model="user.username"
                        />
                    </div>
                    <div class="form-group">
                        <Field
                            placeholder="Password"
                            name="Password"
                            type="password"
                            class="form-control"
                            v-model="user.password"
                        />
                    </div>
                    <input type="submit" value="Login">
                  </Form>
							  </div>
							  <div class="form">
								<h3>Create an account</h3>
								<!-- <form action="#" method="post">
								  <input type="text" name="Username" placeholder="Username" required="">
								  <input type="password" name="Password" placeholder="Password" required="">
								  <input type="email" name="Email" placeholder="Email Address" required="">
								  <input type="text" name="Phone" placeholder="Phone Number" required="">
								  <input type="submit" value="Register">
								</form> -->
                <Form
                    @submit="handleRegister"
                >
                    <div class="form-group">
                        <Field
                            placeholder="Username"
                            name="Username"
                            type="text"
                            class="form-control"
                            v-model="user.username"
                        />
                    </div>
                    <div class="form-group">
                        <Field
                            placeholder="Password"
                            name="Password"
                            type="password"
                            class="form-control"
                            v-model="user.password"
                        />
                    </div>
                    <div class="form-group">
                        <Field
                            placeholder="Email"
                            name="Email"
                            type="text"
                            class="form-control"
                            v-model="user.email"
                        />
                    </div>
                    <div class="form-group">
                        <Field
                            placeholder="Phone"
                            name="Phone"
                            type="text"
                            class="form-control"
                            v-model="user.phone"
                        />
                    </div>
                    <input type="submit" value="Register">
                  </Form>
							  </div>
							  <div class="cta"><a href="#">Forgot your password?</a></div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import {Form, Field, ErrorMessage} from "vee-validate"
import { useUserStore } from "../stores/UserStore";
export default {
  components: {
            Form, 
            Field, 
            ErrorMessage
        },
  data() {
    return {
      user: {
        username:'',
        password:'',
      },
      name: ''
    };
  },
	methods: {
		toggleClick() {
			$('.form').animate({
				height: "toggle",
				'padding-top': 'toggle',
				'padding-bottom': 'toggle',
				opacity: "toggle"
			}, "slow");
		},
    async handleLogin() {
      const store = useUserStore();
      await store.login(this.user);
      const user = store.user;
      alert("Login successfully!")
      this.name = user.username;
    },
    async handleRegister() {
      const store = useUserStore();
      await store.register(this.user);
      alert("Register successfully!")
    }
	},
  mounted() {

  }
}
</script>
<style>
.aw_sign_in_register ul li a{
	color: #fff;
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    background: #FF8D1B;
    text-align: center;
    padding: 6px 30px;
    font-weight: bold;
}
.aw_sign_in_register ul li a:focus{
	outline:none;
}
.aw_sign_in_register ul li a:hover{
	background:#212121;
}
.aw_sign_in_register ul li{
	display:inline-block;
	color:#212121;
	font-size:1em;
}
.aw_sign_in_register ul li i,.aw_sign_in_register ul li:first-child{
	padding-right:1em;
}
/* Form Module */
.form-module {
	position: relative;
    background: #ffffff;
    max-width: 400px;
    width: 100%;
    border-top: 5px solid #FF8D1B;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    margin:1em auto;
}
.form-module .toggle {
  cursor: pointer;
  position: absolute;
  top: -0;
  right: -0;
  background:#FF8D1B;
  width: 30px;
  height: 30px;
  margin: -5px 0 0;
  color: #ffffff;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
}
.form-module .toggle .tooltip {
	position: absolute;
    top: 5px;
    right: -75px;
    display: block;
    background: rgba(0, 0, 0, 0.6);
    width: auto;
    padding: 5px;
    font-size: 12px;
    line-height: 1;
    text-transform: uppercase;
    opacity: 1;
    font-family: 'Ubuntu', sans-serif !important;
}
.form-module .toggle .tooltip:before {
  content: '';
  position: absolute;
  top: 5px;
  left: -5px;
  display: block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid rgba(0, 0, 0, 0.6);
}
.form-module .form {
  display: none;
  padding: 30px;
}
.form-module .form:nth-child(2) {
  display: block;
}
.form-module h3 {
    margin: 0 0 1.5em;
    color: #212121;
    font-size: 1.2em;
    font-weight: 400;
    line-height: 1;
}
.form-module input[type="text"],.form-module input[type="password"],.form-module input[type="email"] {
  outline: none;
  display: block;
  width: 100%;
  border: 1px solid #d9d9d9;
  margin: 0 0 20px;
  padding: 10px 15px;
  box-sizing: border-box;
  font-weight: 400;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  font-size:14px;
}
.form-module input[type="text"]:focus,.form-module input[type="password"]:focus,.form-module input[type="email"]:focus {
  border:1px solid #C7D0F5;
  color: #333333;
}
.form-module input[type="submit"] {
	background: #919191;
    width: 100%;
    border: 0;
    padding: 10px 15px;
    color: #ffffff;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
	outline:none;
}
.form-module input[type="submit"]:hover {
  background:#FF8D1B;
}
.form-module .cta {
	background: #343434;
    width: 100%;
    padding: 15px 40px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
}
.form-module .cta a {
    color: #fff;
    text-decoration: none;
    font-size: 1em;
}
.modal-header {
    text-align: center;
    font-size: 2em;
    color: #212121;
}
.modal-content{
	z-index:9999;
}

</style>