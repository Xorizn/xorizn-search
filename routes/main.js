__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('https://github.com/Xorizn/xorizn-search#readme')
})
module.exports = router
