function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    try{
        const decodedValue = jwt.verify(token, JWT_SECRET);
        if(decodedValue) next();
        else{
            res.send("Please Sign In").status(400);
        }
    } catch(err){
        res.send(err)
    }
}

module.exports = userMiddleware;