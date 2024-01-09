const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://lakshay226:eC6h5TcaPSJh7hi@cluster0.fstbf.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}