// eventListener -- Listen for spcific events to create interactive web pages 
//               events -- click, mouseover, mouseout, .addeventListener(event, callback);
              
const myBox = document.getElementById("myBox");

    

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!! 🤕"

});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't touch 😳"

});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "springgreen";
    event.target.textContent = "Click Me! 😎"

});