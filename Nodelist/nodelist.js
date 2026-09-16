// NodeList --- Static collection of HTML element by (id, class, element)
//              Can be created by using querySelectorAll()
//              Similar to an array, but no map, filter, reduce
//              This won't update to automatically reflect changes

const buttons = document.querySelectorAll(".button");

// ADD HTML/CSS Properties

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.textContent += "🙂";
});

// Click Event Listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "lightblue";
        event.target.style.color = "black";
    });
});

//Mouseover + Mouseout event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "violet";
        event.target.style.color = "white";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "bisque";
        event.target.style.color = "black";
    });
});

// Add a new element

const newbtn = document.createElement("button");
newbtn.textContent = "Button 5";
newbtn.classList = "button";
document.body.appendChild(newbtn);

