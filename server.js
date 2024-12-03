const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.listen(3000, () => {
    console.log('The express app is ready!');
  });
  