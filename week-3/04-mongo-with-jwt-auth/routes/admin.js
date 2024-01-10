const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")

dotenv.config();
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  let admin = await Admin.findOne({ username: username });
  if (admin) {
    res.send("User already exists").status(400);
    return;
  }
  admin = await Admin.create({
    username: username,
    password: password,
  });
  res
    .send({
      msg: "Admin created successfully",
      admin,
    })
    .status(201);
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.find({
    username,
    password,
  });

  if (admin) {
    let jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign(username, jwtSecret);
    res.json({token});
  } else {
    res.send("Invalid credentials").status(400);
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title  = req.body.title
  const description = req.body.description
  const price = req.body.price
  const imageLink = req.body.imageLink

  let course = await Course.findOne({title : title})
  if(course){
    res.send("This course already exists").status(400);
    return;
  }

  course = await Course.create({
    title,
    description,
    price,
    imageLink
  })

  res.send({
    msg : "course created successfully",
    course
  }).status(200)
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  let courses = await Course.find();
  res.send(courses).status(200);
});

module.exports = router;
