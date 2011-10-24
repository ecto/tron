
var charm = require('charm')(process);

var render = {

  splash: function(){
    
  },

  init: function(){
    charm.reset();
    render.splash();
  }
}

module.exports = render;
