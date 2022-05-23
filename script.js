const foxTotal = document.querySelector("#fox-total");
const dogTotal = document.querySelector("#dog-total");
const foxBtn = document.querySelector("#fox-btn");
const dogBtn = document.querySelector("#dog-btn");

foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

function getRandomFox() {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      foxTotal.innerHTML = `<img src='${data.image}'/>`;
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dogTotal.innerHTML = `<img src='${data.url}'/>`;
      }
    });
}
