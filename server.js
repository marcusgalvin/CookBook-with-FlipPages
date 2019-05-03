const express = require('express');   //init Express
const app = express();
const port = 8080;                //c9's default PORT

let allWords = require('./data'); //require the data.js file containing the dictionary words


app.use(express.static("public"));  //serves a static front end

  
  app.get('/data', (req, res) =>{           //sends data.js file(allWords) to be used in ./public/scripts.js
    res.send(allWords);     
    
  })
  


app.listen(port, () => console.log(`Example app listening on port ${port}!`));   //check console to make sure server is running

// console.log(allWords)

module.exports = allWords













// const express = require('express'); //init express
// const app = express();              //sets constant called 'app' to equall express()


// const bodyParser = require('body-parser');  //npm install body-parser --save , saves to package.json dependencies
// app.use(bodyParser.json());

// var allWords = require('./data'); //require the data.js file containing the dictionary words



// app.use(express.static('public'))  // serves a static HTML, CSS, and JS file located in ./public directory

// app.get('/data', function (req, res) {
  
//     var value= Object.values(allWords)   //trying to located the 'pair' inside the object in data.js
   
//   res.send(value);                     //?????

        
// // console.log(Object.values(allWords));


// });



// const port = 8080;   //c9's default port

// app.listen(port, () => {   
    
//         // console.log(allWords)

//     console.log(`Server starts on port ${port}`);   //lets user know if server is running and on which PORT
// });

// module.exports = allWords;