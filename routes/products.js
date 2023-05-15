
var express = require('express');
var router= express.Router()
// initializing the app

router.get('/', (req, res) => {
res.send('This is product routes')
})
router.get('/get-all-products/:id', (req, res) => {
res.send('Get all products'+req.params.id)
})
router.get('/get-all-single/:id/:name', (req, res) => {
res.send('Get all products  '+req.params.id + '  The name '+req.params.name)
})
//retrict the request id to 4 digits
router.get('/get-single/:key([0-9]{4})', (req, res) => {
res.send('Get all products  '+req.params.key )
})
//retrict the request id to letters digits 3 in length
router.get('/get-username/:key([A-Za-z]{3})', (req, res) => {
res.send('Get all products  '+req.params.key )
})
//Not found page
// router.get('*', (req, res) => {
// res.send('The url does not found' )
// })

// router.get('/middleware',(req, res,next) =>{
// console.log('request found')
// })
router.get('/middleware',(req, res) =>{
res.send('iko fiti')
})
// router.get('/middleware',(req, res) =>{
//
// })

 module.exports =router