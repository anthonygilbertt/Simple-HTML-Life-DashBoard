// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000










// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// // Weather API
// // -----------------
// // api.openweathermap.org/data/2.5/weather?q={city name}&appid=49a8691eff18c381d56f668e210854b0
// // api.openweathermap.org/data/2.5/weather?q=London&appid=49a8691eff18c381d56f668e210854b0

// // https://api.openweathermap.org/data/2.5/weather?q=London&APPID=001b0f58045147663b1ea518d34d88b4



// var expressVue = require("express-vue");
// var app = express();

// //pass your app through express-vue here
// //expressVueOptions is optional and explained later in the docs
// //this is a promise, so you can either await it or do this.
// expressVue.use(app, expressVueOptions).then(() => {
//     //the rest of your express routes.
// });



var http = require('http');
var fs = require('fs');
var axios = require('axios');






http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log('server listening on port ' + 8070 + ' ...');
        return res.end();
    });

    
}).listen(8070);




var config = {
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=001b0f58045147663b1ea518d34d88b4&units=imperial',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });