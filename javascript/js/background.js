const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.background = `url(${bgImage.src})`;

document.body.style.backgroundSize ="cover";

document.body.style.backgroundRepeat = "no-repeat"

//document.body.style.backgroundPosition = "center";
