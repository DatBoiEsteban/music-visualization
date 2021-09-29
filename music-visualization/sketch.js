var song;
var barra_volumen;

var boton_play;
var amp;
var volHistory = [];

function preload() {
  song = loadSound("song.mp3", loaded);
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  amp = new p5.Amplitude();
  song.play();
}

function loaded() {
  barra_volumen = createSlider(0, 1, 0.5, 0.01);
  boton_play = createButton("stop");
  boton_play.mousePressed(togglePlay);
}

function togglePlay() {
  if (!song.isPlaying()) {
    song.play();
    boton_play.html("stop");
  } else {
    song.stop();
    boton_play.html("play");
  }
}

function draw() {
  background(0);
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

    // var y =
    vertex(x, y);
  }
  endShape();

  if (volHistory.length > 360) {
    volHistory.splice(0, 1);
  }
}
