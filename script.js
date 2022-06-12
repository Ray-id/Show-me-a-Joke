let joke = document.getElementById("joke");
let button = document.getElementById("button");
let url = "https://v2.jokeapi.dev/joke/Any?type=single";

let handleClick = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.innerHTML = item.joke;
    });
};

window.addEventListener("load", handleClick);
button.addEventListener("click", handleClick);
