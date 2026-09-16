// ClassList --- Element property in JavaScript used to interact with an element's list
//                  of classes (CSS Classes) 
//                 Allows toom make reusable classes for many elements across the web page
//   add(), remove(), toggle(remove if present, add if not), replace(old new), contains()

const myBtn = document.querySelectorAll(".button");

myBtn.forEach(button => {
    button.classList.add("enabled");
});

myBtn.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

myBtn.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

myBtn.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")) {
            event.target.textContent += "🤬";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});
