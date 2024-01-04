let allNextButons = document.querySelectorAll(
  ".page > .front > .pagination > .next"
);
let allPrevoiusButons = document.querySelectorAll(
  ".page > .back > .pagination > .previous"
);
let goProfile = document.querySelector(".pagination .go-profile");
let count = 0;
window.addEventListener("load", function (params) {
  allNextButons.forEach((next, index) => {
    console.log();
    next.onclick = (element) => {
      let page = next.parentElement;
      while (!page.classList.contains("page")) {
        page = page.parentElement;
      }
      let nextPage = page.nextElementSibling;
      page.classList.add("page-turned");
      console.log(page.previousElementSibling);
      page.previousElementSibling.style.zIndex = 1;
      if (nextPage) nextPage.style.zIndex = 3;
    };
  });

  allPrevoiusButons.forEach((previous) => {
    previous.onclick = (element) => {
      let page = previous.parentElement;
      while (!page.classList.contains("page")) {
        page = page.parentElement;
      }
      page.classList.remove("page-turned");
      let previousPage = page.previousElementSibling;
      if (previousPage.classList.contains("page")) {
        console.log(page.nextElementSibling);
        if (page.nextElementSibling != null)
          page.nextElementSibling.style.zIndex = 1;
        previousPage.style.zIndex = 4;
      }
    };
  });

  goProfile.onclick = () => {
    for (let index = allPrevoiusButons.length - 1; index >= 0; index--) {
      count++;
      this.setTimeout(() => {
        const element = allPrevoiusButons[index];
        element.click();
      }, count * 200);
      
    }
  };
});
