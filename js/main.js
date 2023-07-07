const toggleBtn = document.querySelector(".navbar-toggle-btn");
const cards = document.querySelectorAll(".flip-card");
const innerCard = document.querySelectorAll(".flip-card-inner");
const helpFunction = document.querySelector(".help-function");
// const helpMsg = document.querySelector(".help-message ");
const helpVideo = document.querySelector(".help-video");
const helpMsg = document.querySelector(".help-message");

cards.forEach(function (card) {
  const cardInner = card.querySelector(".flip-card-inner");
  console.log(cardInner);
  card.addEventListener("click", function () {
    cardInner.classList.toggle("flipped");
  });
});

toggleBtn.addEventListener("click", function (e) {
  console.log(e);
  const menu = document.querySelector(".navbar-menu");
  menu.classList.toggle("active");
});

helpFunction.addEventListener("click", function (e) {
  console.log(e);
  // e.preventDefault();
  helpVideo.classList.toggle("hidden");
  helpMsg.classList.toggle("hidden");
});
