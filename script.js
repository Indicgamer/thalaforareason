// Function to fetch a random meme from the Meme Generator API
function fetchRandomMeme() {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const memes = data.data.memes;
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      const memeImageUrl = randomMeme.url;

      // Display the meme using the image tag with id "meme_image"
      const memeImage = document.getElementById("meme_image");
      memeImage.src = memeImageUrl;
    })
    .catch((error) => {
      console.error("Error fetching random meme:", error);
    });
}
//fetchRandomMeme();
