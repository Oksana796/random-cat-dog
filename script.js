const catTotal = document.querySelector("#cat-total");
const dogTotal = document.querySelector("#dog-total");
const catBtn = document.querySelector("#cat-btn");
const dogBtn = document.querySelector("#dog-btn");

catBtn.addEventListener("click", getRandomCat);
dogBtn.addEventListener("click", getRandomDog);

function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      if (data.file.includes(".mp4")) {
        getRandomCat();
      } else {
        catTotal.innerHTML = `<img src='${data.file}'/>`;
      }
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
