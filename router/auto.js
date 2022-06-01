const express = require('express')
var router = express.Router();

router.get('/', (req, res) => {
    res.send('fuck you router')
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.send(true)
})

module.exports = router;
