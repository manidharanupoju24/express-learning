const express = require('express')
const app = express()
const logger = require('./logger')
const authorize  = require('./authorize')
const morgan = require('morgan')
// req => middleware => res
//app.use(logger)
//app.use('/api',logger) //middleware can be passed to app.use method

// 1. use vs route
// 2. options - our own / express /third party

//app.use([logger, authorize]) //multiple middleware functions
// execution follows the order in the above app.use 

app.use(express.static('./public')) // express built in middle ware

app.use(morgan('tiny'))

app.get('/', (req,res)=>{
    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('About')
})

app.get('/api/products', (req,res)=>{
    res.send('Products')
})

app.get('/api/items',[logger,authorize], (req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server is listening at port 5000...')
})