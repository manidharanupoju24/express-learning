const express = require('express')
const app = express()
const logger = require('./logger')
// req => middleware => res
app.use(logger)
//app.use('/api',logger) //middleware can be passed to app.use method
 
app.get('/', (req,res)=>{
    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('About')
})

app.get('/api/products', (req,res)=>{
    res.send('Products')
})

app.get('/api/items', (req,res)=>{
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server is listening at port 5000...')
})