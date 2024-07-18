const navs = document.querySelectorAll("menu li");
navs.forEach(nav => {
    nav.addEventListener("click", () => {
        cleared_Selection();
        nav.classList.add("active");
    })
    function cleared_Selection() {
        navs.forEach(nav => {
            nav.classList.remove("active");
        })
    }
})