const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    //res.send('Testing')
    next() // either you terminate or you pass it on to next middleware using next()
}

module.exports = logger