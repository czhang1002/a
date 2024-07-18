// navigation selection
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

// pet record header sort selection (sort by selected field)
const pet_record_header = document.querySelectorAll(".pet_record_header b");
pet_record_header.forEach(selection => {
    selection.addEventListener("click", () => {
        cleared_Selection();
        selection.classList.add("active");
    })
    function cleared_Selection() {
        pet_record_header.forEach(selection => {
            selection.classList.remove("active");
        })
    }
})
