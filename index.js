const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://api.adviceslip.com/advice";

let getQuote = () => {
  jokeContainer.style.opacity = 0;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      jokeContainer.textContent = `💡 "${data.slip.advice}" 💡`;
      jokeContainer.style.opacity = 1;
    })
    .catch(() => {
      jokeContainer.textContent = "❌ Unable to fetch quote. Try again! ❌";
      jokeContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", getQuote);
getQuote();
