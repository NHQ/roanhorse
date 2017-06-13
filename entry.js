var slideshow = require('../uxer-show')
var show = slideshow('slideshow', 'left', 0)
show.goTo(0)
var i = 0
setInterval(function(){
  show.goTo(i++%4)
  console.log(show)
}, 2333)



