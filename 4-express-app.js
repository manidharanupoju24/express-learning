const express = require('express')
const path = require('path')
const app = express()

//setup all static and middleware stuff
app.use(express.static('./public')) // all the static files should be transferred to dir 'public'

// the below index.html can also be moved to public (static) folder
app.get('/',(req,res)=>[
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
])

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})
app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})