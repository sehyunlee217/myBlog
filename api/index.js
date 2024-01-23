require("dotenv").config();
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require("./config/dbConnection");
const cookieParser = require('cookie-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const verifyJWT = require('./middleware/verifyJWT');

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(cors({ credentials: true, origin: 'https://shyun.dev' })); // https://shyun.dev
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Public routes for requests (auth not needed)
app.use("/user", require("./routes/userRoutes"));
app.use("/post", require("./routes/postRoutes"));
app.use("/arts", require("./routes/artRoutes"));
app.use("/projects", require("./routes/projectRoutes"));


app.use(verifyJWT); // middleware to verify JWT token for auth routes

app.use("/auth", require("./routes/authRoutes"));

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${ PORT }`));
})

