var express = require('express');
var router = express.Router();

//var searchData = document.getElementById("txtData").value;
//let apiDetails =  $.ajax('http://api.tvmaze.com/singlesearch/shows/:id');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TV-Maze Show' });
});

/*router.get('/shows/:id',(req, res, next) => {
  const showId = Number(req.params.id);

   url = `http://api.tvmaze.com/singlesearch/shows/:${showId}`;
  const id1 = req.url;
 // const findShow = apiDetails.find((showId) => showId.id === id1 );
  res.send(`name: ${showId.id}`);
  // res.send(`id is ${id1.id}`)
 // res.render('showDetails',{ title: 'TV-Maze Show' , body:req.params.id})
});*/

module.exports = router;
