const express = require('express');
const mongoose = require('mongoose');
const app = express();

const routerPost = require('./routes/postsRoutes');

app.use(express.json());


app.use('/api', routerPost);

const Port = 5001;

app.listen(Port, () => console.log("server start"));
