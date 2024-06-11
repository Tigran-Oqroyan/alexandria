const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.configure();
const app = express();

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

