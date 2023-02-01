const express = require('express');
const mongoose = require('mongoose');
const productRouter= require('./routes/products');
const pageRouter=require('./routes/pages ');
const app = express();

app.use(express.static('public'))
app.set('view engine','ejs')

app.use('/api/products',productRouter)
app.use('/api/pages',pageRouter)












 app.listen(2000)