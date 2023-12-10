const list = document.querySelectorAll(".header__nav li a");

list.forEach(li => {
    li.addEventListener("mouseover", () => {
        list.forEach(el => {
            if (el !== li) {
                el.style.color = "#eaeaea";
            }
        })
    })
    li.addEventListener("mouseout", () => {
        list.forEach(el => {
            if (el !== li) {
                el.style.color = "#22242a";
            }
        });
    });
})
