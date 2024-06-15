const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute = require('./routes/user.route.js');
const usernameRoute = require('./routes/username.route.js');

// Main
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    orgin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization' , 'Content-Type']
}))

app.get('/' , (request , response) => {
    response.send("Hello from backend");
})

// Routes

app.use('/api/users', userRoute)
app.use('/api/usernames', usernameRoute)
// Database connecting

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/Alexandria')
.then(() => {
    console.log('connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error) =>
    console.log(error.message)
)