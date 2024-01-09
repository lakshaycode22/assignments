const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  let user = await User.findOne({ username: username });
  if (user) {
    res.send("User already exists").status(400);
    return;
  }
  user = await User.create({
    username: username,
    password: password,
    purchasedCourses: [],
  });
  res
    .send({
      msg: "User created successfully",
      user,
    })
    .status(201);
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  let courses = await Course.find();
  res.send(courses).status(200);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers["username"];

  let user = await User.findOne({
    username,
  });

  const purchasedCourses = user.purchasedCourses;
  if (purchasedCourses.includes(req.params.courseId)) {
    res.status(400).send("Course already purchased");
    return;
  }

  user.purchasedCourses.push(req.params.courseId);
  const newUser = await User.findOneAndUpdate({ username }, user);

  res
    .send({
      msg: "Course purchased successfully",
    })
    .status(200);
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers["username"];

  let user = await User.findOne({
    username,
  });

  let purchasedCourses = [];
  for(let i = 0; i < user.purchasedCourses.length; i++){
    const course = await Course.findById(user.purchasedCourses[i]);
    purchasedCourses.push(course);
  }
  res.send(purchasedCourses).status(200);
});

module.exports = router;
