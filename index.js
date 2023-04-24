var express = require('express'),
  cors = require('cors'),
  secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')
var mainrouter = require('./routes/main.js'),
  apirouter = require('./routes/api.js')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("lib"))


app.use('/', mainrouter)
app.use('/api', apirouter)
app.use(function (req, res, next) {
  res.redirect('https://github.com/Xorizn/xorizn-search#readme')
});

app.listen(PORT, () => {
  console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
