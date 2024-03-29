const express = require('express')
const app = express();

let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({extended:false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({status:true, data:people})
})

app.post('/login',(req,res) => {
   const {name} = req.body;
   if(name){
    res.status(200).send(`Welcome ${name}`)
   }
res.status(401).send("Please enter something")
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})