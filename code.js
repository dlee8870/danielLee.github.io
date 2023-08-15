var typed = new Typed(".gen-type", {
    strings: ["I'm a student", "I'm a gamer", "I'm a musician", "I'm a homebody"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
});

function MyFunction() {
    let element = document.body;
    element.classList.toggle("dark")
}


$(document).ready(function() {
    // Add the 'hovered' class to the Home nav-link when the page loads
    $("a[href='#home']").addClass("hovered");
  });