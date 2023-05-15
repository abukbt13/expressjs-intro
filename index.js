// importing express
const express= require('express')
// initializing the app

//type of http request
var products=require('./routes/products')
// var users=require('./routes/users')

const app = express()

app.use('/products',products)
// app.use('/users',users)

app.listen(3001);