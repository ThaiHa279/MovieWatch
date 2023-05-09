const jwt = require('jsonwebtoken');

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token; 
        if (token) {
            const accessToken = token.split(' ')[1]; 
            jwt.verify(accessToken,process.env.JWT_ACCESS_KEY,(err, user)=>{
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        }
        else {
            res.status(401).json("You are not authenticated");
        }
    }, 
    verifyAdmin: (req, res, next)=> {
        middlewareController.verifyToken(req, res, () => {
            if (req.user.admin) {
                next();
            } else {
                res.status(403).json("You are not allowed to admin");
            }
        })
    }
}

module.exports = middlewareController;