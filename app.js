const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    //res.send(products) //instead of sending the whoel response, we can filter
    const newProducts = products.map((product)=>{
        const {id, image, name} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/1',(req,res)=>{
    const singleProduct = products.find((product)=> product.id == 1)
    res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})