let allNextButons = document.querySelectorAll(".page > .front > .pagination > .next");
let allPrevoiusButons = document.querySelectorAll(".page > .back > .pagination > .previous");
window.addEventListener("load", function(params) {
    allNextButons.forEach(next => {
        next.onclick = (element => {
            let page = next.parentElement;
            while (!page.classList.contains("page")) {
                page = page.parentElement;
            }
            page.classList.add("page-turned");            
        })
    });

    allPrevoiusButons.forEach(previous => {
        previous.onclick = (element => {
            let page = previous.parentElement;
            while (!page.classList.contains("page")) {
                page = page.parentElement;
            }
            page.classList.remove("page-turned");            
        })
    });
})