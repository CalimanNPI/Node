const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();


app.set('port', process.env.PORT ||3000);

