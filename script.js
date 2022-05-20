const ratingCard = document.getElementById("rating-container");
const btns = document.getElementsByClassName("rating-button");
const submitButton = document.querySelector(".submit-button");
const card1 = document.querySelector("#rating-container");
const card2 = document.querySelector("#submitted-container");
let result = document.getElementById("result");
let rating;

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e, target) => {
    removeClass(e);
    defineRating(btn);
  });
});

function defineRating(btn) {
  if (btn.textContent === rating) {
    rating = "";
    submitButton.classList.add("disabled");
  } else {
    submitButton.classList.remove("disabled");
    rating = btn.textContent;
  }
}

function removeClass(e) {
  Array.from(btns).forEach((btn) => {
    if (btn !== e.target || btn.textContent === rating) {
      btn.classList.remove("selected");
    } else {
      btn.classList.add("selected");
    }
  });
}

submitButton.addEventListener("click", submitRating);

function submitRating() {
  card1.classList.add("hidden");
  card2.classList.remove("hidden");
  result.textContent = `You selected ${rating} out of 5`;
}
