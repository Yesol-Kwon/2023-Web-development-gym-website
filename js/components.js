fetch("components/nav_bar.html")
  .then((response) => {
    return response.text();
  })
  .then((htmlContent) => {
    const navContainer = document.querySelector(".navbar .menu");
    navContainer.innerHTML = htmlContent;
  });

fetch("components/footer.html")
  .then((response) => response.text())
  .then((htmlContent) => {
    const footerContainer = document.querySelector(".footer");
    footerContainer.innerHTML = htmlContent;
  });
