require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/newpage', (req,res) => {
    res.render('views/places/new')
})

app.get('/edit', (req,res) => {
    res.render('views/places/edit')
})

app.get('/show', (req,res) => {
    res.render('views/places/show')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT)
