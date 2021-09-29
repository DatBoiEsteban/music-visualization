var song;
var barra_volumen;

var boton_play;

function setup() {
  createCanvas(200, 200);
  barra_volumen = createSlider(0, 1, 0, 0.01);
  boton_play = createButton("play");
  boton_play.mousePressed(togglePlay);
  song = loadSound("song.mp3");
}

function togglePlay() {
  if (!song.isPlaying()) {
    song.play();
    boton_play.html("pause");
  } else {
    song.pause();
    boton_play.html("play");
  }
}

function draw() {
  background(0);
  song.setVolume(barra_volumen.value());
}
