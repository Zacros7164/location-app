var express = require('express');
var router = express.Router();
let axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req,res)=>{
  console.log(req.body)
  let msg = "error";
  const { userId, password } = req.body
  if((userId === "foo") && (password === "bar")){
    msg = "success"
  }
  res.json(msg);
})

router.post('/getWeather', (req,res)=>{
  const { lat, long } = req.body;
  const weatherUrl = `https://api.weather.gov/points/${lat},${long}`
  console.log(weatherUrl)
  axios({
    method: 'GET',
    url: weatherUrl
  }).then((response)=>{
    console.log(response.data.properties.relativeLocation.properties)
    res.json(response.data.properties.relativeLocation.properties)
  })
})

module.exports = router;
