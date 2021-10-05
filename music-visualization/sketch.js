//Visualization
var song;
var barra_volumen;

var boton_play;
var amp;
var volHistory = [];

const songList = [];
const songNames = ["../music/battle_dragons.mp3", "../music/cinematic_chillhop.mp3", "../music/cinematic_fairy_tale.mp3"];
let songSelected; 

function preload() {
  
  songList[0] = loadSound("../music/battle_dragons.mp3");
  songList[1] = loadSound("../music/cinematic_chillhop.mp3");
  songList[2] = loadSound("../music/cinematic_fairy_tale.mp3");
  song = songList[0];
  loaded()
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  amp = new p5.Amplitude();
  //song.play();
}

function loaded() {
  barra_volumen = createSlider(0, 1, 0.5, 0.01);
  boton_play = createButton("play");
  boton_play.mousePressed(togglePlay);
}

function togglePlay() {
  if (!song.isPlaying()) {
    song.play();
  } else {
    song.stop();
  }
}

function draw() {

  if (song.isPlaying()) {
    boton_play.html("stop");
  } else {
    boton_play.html("play");
  }

  if (filepath != null && filepath != songSelected){
    songSelected = filepath;
    let i = songNames.indexOf(songSelected);
    if (song.isPlaying()) {
      togglePlay();
    }
    song = songList[i];
    song.play();
  }
  background(amp.getLevel()*300, amp.getLevel()*400, amp.getLevel()*500);
  song.setVolume(barra_volumen.value());
  var vol = amp.getLevel();
  volHistory.push(vol);
  stroke(255);
  noFill();
  translate(width / 2, height / 2);
  beginShape();

  for (var i = 0; i < 360; i++) {
    var r = map(volHistory[i], 0, 1, width * (1 / 8), width * (7 / 8));
    var x = r * cos(i);
    var y = r * sin(i);

    vertex(x, y);
  }
  endShape();

  if (volHistory.length > 360) {
    volHistory.splice(0, 1);
  }
}
