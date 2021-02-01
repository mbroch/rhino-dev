
"USE STRICT"

const DEBUG = false
const MUSIC_MENU = true

let enumStateMachine = { RUN:0, COLLISION:1, MENU:2, PAUSE:3 }
  // débute dans cet état
let STATE = enumStateMachine.MENU

let bestScore  = 0

const runAlleyDurationR1R2 = 300 
const runAlleyDurationR3R4 = 300 

//const enumMenuState = {go:0, stop:1}
//const enumMainSceneState = {go:0, stop:1}

enumRhinoPos = {left:-6.5, middle:0, right:6.5, nothing:null}

shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {    
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    return array;
}

