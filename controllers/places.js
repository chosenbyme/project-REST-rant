const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name:'CHUANTIANXIA',
        city: 'Brooklyn',
        state:'NY',
        cuisines:'SICHUAN, Chinese Spicy',
        pic:'https://chuantianxiany.com/wp-content/uploads/2022/04/slide01.jpg'
    },
    {
        name:'Daxi Sichuan',
        city: 'Flushing',
        state:'NY',
        cuisines:'SICHUAN, Chinese Spicy',
        pic:'https://s3-media0.fl.yelpcdn.com/bphoto/HrOpVbsmLlSJz0L0HaPg-g/o.jpg'
    }
    ]
    res.render('places/index', {places})
})

router.get('/new', (req,res) => {
    res.render('places/new')
})

router.get('/edit', (req,res) => {
    res.render('places/edit')
})

router.get('/show', (req,res) => {
    res.render('places/show')
})


module.exports = router