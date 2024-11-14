var typed = new Typed(".gen-type", {
    strings: ["a student", "a researcher", "a developer", "a musician", "a gamer"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
});

function MyFunction() {
    let element = document.body;
    element.classList.toggle("dark")
}

$(document).ready(function() {
    $("a[href='#home']").addClass("hovered");
});