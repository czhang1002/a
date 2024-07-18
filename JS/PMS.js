// navigation selection
const navs = document.querySelectorAll("menu li");
navs.forEach(nav => {
    nav.addEventListener("click", () => {
        cleared_selection();
        nav.classList.add("active");
    })
    function cleared_selection() {
        navs.forEach(nav => {
            nav.classList.remove("active");
        })
    }
})

// pet record header sort selection (sort by selected field)
const pet_record_header = document.querySelectorAll(".pet_record_header b");
pet_record_header.forEach(selection => {
    selection.addEventListener("click", () => {
        cleared_selection();
        selection.classList.add("active");
    })
    function cleared_selection() {
        pet_record_header.forEach(selection => {
            selection.classList.remove("active");
        })
    }
})
