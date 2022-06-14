const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    //res.send(products) //instead of sending the whole response, we can filter
    const newProducts = products.map((product)=>{
        const {id, image, name} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    //console.log(req)
    console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find(
        (product)=> product.id == Number(productID)
        )
    if(!singleProduct){
        res.status(404).send('<h1>Product page not found</h1>')
    }
    console.log(singleProduct)    
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
  })

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})