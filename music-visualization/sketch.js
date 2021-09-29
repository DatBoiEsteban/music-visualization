var song;
var barra_volumen;

function setup() {
  createCanvas(200, 200);
  barra_volumen = createSlider(0, 1, 0, 0.01);
  song = loadSound("song.mp3", () => {
    song.play();
  });
}

function draw() {
  background(0);
  song.setVolume(barra_volumen.value());
}
