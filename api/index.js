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

console.log(__dirname + "/uploads");

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

app.use("/auth", require("./routes/userRoutes"));
app.use("/post", upload.single('file'), require("./routes/postRoutes"));

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${ PORT }`));
})

