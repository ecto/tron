
// splash screen

var tron = require('../main.js'),
    tty = require('tty'),
    charm = require('charm')(process),
    play = require('play');

var screen = {
  frame: 0,
  direction: 0,
  x: 1,
  y: 1,

  render: function(){
    if (screen.frame == 0) screen.init();
    var window = tty.getWindowSize(1),
        height = window[0],
        width = window[1];

    charm.background('blue');
    charm.position(screen.x, screen.y);
    charm.write(' ');

    if (screen.direction == 0) screen.x++;
    else screen.x--;

    if (screen.x <= 0 || screen.x > width) screen.y++;
    if (screen.x <= 0) screen.direction = 0;
    if (screen.x > width) screen.direction = 1;

    screen.frame++;
  },

  init: function(){
    //charm.on('\n', tron.play);
    play.sound(__dirname + '/../../asset/sound/intro.wav');
    charm.erase('screen');
  }
}

module.exports = screen;
