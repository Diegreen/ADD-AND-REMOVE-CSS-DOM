let buttonToggle = document.querySelector(".button-toggle");
let body = document.body
let classStyle = "dark-mode"

/*buttonToggle.addEventListener("click", function() {
    body.classList.add(classStyle)
    body.classList.contains(classStyle) 
    ? body.classList.remove(classStyle) 
    : body.classList.add(classStyle)
})*/
  
buttonToggle.addEventListener("click", function() {
    body.classList.toggle(classStyle)
})