const express = require('express')
const app = express()

//home page
app.get('/',(req,res)=>{
    console.log("navigated to the home page.")
    res.status(200).send("Hello world")
})

//about page
app.get('/about',(req,res)=>{
    console.log("navigated to the about page.")
    res.status(200).send("About page")
})

app.all('*',(req,res)=>{
    res.status(404).send('Resource not found')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen