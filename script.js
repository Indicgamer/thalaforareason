// Function to fetch a random meme from the Meme Generator API
function fetchMeme(caption) {
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

function showLoadingAnimation() {
  const loadingAnimation = document.getElementById("loading_animation");
  const memeImage = document.getElementById("meme_image");
  memeImage.style.display = "none";
  loadingAnimation.style.display = "block";
}

function hideLoadingAnimation() {
  const loadingAnimation = document.getElementById("loading_animation");
  const memeImage = document.getElementById("meme_image");
  memeImage.style.display = "block";
  loadingAnimation.style.display = "none";
}

function playAudio() {
  var audio = document.getElementById("audio");
  //play from start
  audio.currentTime = 0;
  audio.play();
  setTimeout(function () {
    audio.pause();
  }, 20000);
}

function captionMeme(
  templateId = "72261972",
  username = "itswhocares",
  password = "memes@2002",
  text0 = "MSDHONI",
  text1 = "thala for a reason"
) {
  const url = "https://api.imgflip.com/caption_image";
  const params = new URLSearchParams();
  input1 = document.getElementById("input1").value;
  if (input1 != "") {
    text0 = input1;
  }
  text0 = text0.replace(" ", "").split("").join("+") + " = 7";

  params.append("template_id", templateId);
  params.append("username", username);
  params.append("password", password);
  params.append("text0", text0);
  params.append("text1", text1);

  showLoadingAnimation();

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const memeImageUrl = data.data.url;
      const memeImage = document.getElementById("meme_image");
      memeImage.src = memeImageUrl;
      // Handle the response data here
      hideLoadingAnimation();
      playAudio();
      return false;
    })
    .catch((error) => {
      console.error("Error captioning meme:", error);
      hideLoadingAnimation();
      return false;
    });

  return false;
}
//fetchMeme();
