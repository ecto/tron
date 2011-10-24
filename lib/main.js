/*
 * tron library
 * Cam Pedersen
 * Oct 22, 2011
 */

var tty = require('tty'),
    exec = require('child_process').exec
    Player = require('./player.js'),
    render = require('./render.js'),
    play = require('play'),
    charm = require('charm')(process);

var screens = {
  splash: require('./screens/splash.js')
}

var tron = {
  fps: 5,
  loop: null,
  screen: 'splash',

  start: function(){
    charm.reset();
    charm.on('^C', tron.quit);
    charm.position(0,0);
    charm.cursor(false)
    charm.erase('screen');
    tron.loop = setInterval(tron.render, 60 / tron.fps);
  },

  quit: function(){
    play.playerList.forEach(function(player){
      exec('killall ' + player);
    });
    charm.erase('screen');
    process.exit();
  },

  render: function(){
    screens[tron.screen].render();
  },

  play: function(){
    charm.clear();

  }
}

module.exports = tron;
