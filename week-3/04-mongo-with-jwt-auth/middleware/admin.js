const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    try{
        const decodedValue = jwt.verify(token, JWT_SECRET);
        if(decodedValue){
            next();
        }
        else{
            res.send("Please Sign In").status(400);
        }
    } catch(err){
        res.send(err)
    }
}

module.exports = adminMiddleware;