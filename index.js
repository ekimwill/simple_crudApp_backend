const express=require('express')
const app=express()
const mongoose= require('mongoose')
const Product=require('./models/product.model')
const productRoute=require('./routes/product.route')




app.use(express.json());
app.use("/api/products", productRoute); 



mongoose.connect("mongodb+srv://Mike:0930365902@cluster0.rf5edr5.mongodb.net/node?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('Connected to database')
})

.catch((err)=>{
    console.log('Error connecting to database')
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})