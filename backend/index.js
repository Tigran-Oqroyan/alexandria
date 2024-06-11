const express = requir('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute = require('./routes/user.route.js');

// Main

dotenv.config();
const app = express();

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/', (request, response) => {
    response.send("Hello from backend");
})

// Routes

app.use('/api/users' , userRoute);

// Database connecting

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/')
.then(() => {
    console.log('connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error) => {
    console.log(error.message);
})

// name
// surname
// username
// email
// password
// hamalsaran , qolej
// bajin
// kurs
// posts


