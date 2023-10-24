const express = require('express')
const app = express();
const morgan = require('morgan')
const logger = require('./logger');
const authorize = require('./authorize')

// req => middleware => res

// app.use([logger, authorize])


app.use(morgan('tiny')) // for time to rendering some process

app.get('/', (req, res) => {
    res.send('home')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/api/product', (req, res) => {
    res.send('products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('items')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000 ...')
})