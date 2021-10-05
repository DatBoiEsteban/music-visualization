//Get MetaData
const jsmediatags = window.jsmediatags;

let filepath;

function getFileName() {
    var name = document.getElementById('input'); 
    var filename = name.files.item(0).name
    path = "../music/"
    filepath = path + filename;
    console.log(filepath);
};

document.querySelector("#input").addEventListener("change", (event) => {

  const file = event.target.files[0];
  jsmediatags.read(file, {
    onSuccess: function(tag) { 

      // Array buffer to base64 (covert to image)
      const data = tag.tags.picture.data;
      const format = tag.tags.picture.format;
      let base64String = "";
      for (let i = 0; i < data.length; i++) {
        base64String += String.fromCharCode(data[i]);
      }

      // Output media tags
      document.querySelector("#cover").style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
      document.querySelector("#title").textContent = "Titulo: " + tag.tags.title;
      document.querySelector("#artist").textContent = "Artista: " + tag.tags.artist;
      document.querySelector("#album").textContent = "Album: " + tag.tags.album;
      },
      onError: function(error) {
        console.log(error);
      }
  });  
});

