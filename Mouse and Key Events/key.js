// eventListener -- Listen for specific events to create interactive wweb pages
//                  events -- keydown, keyup
//                  document.addEventListener(event, callback);

const emoji = document.getElementById("emoji");

const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown",evet => {
    emoji.textContent = "😲";
    emoji.style.backgroundColor = "tomato";
});

document.addEventListener("keyup",evet => {
    emoji.textContent = "😃";
    emoji.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")) {
        switch(event.key) {
            case "ArrowUp" :
                y -= moveAmount;
                break;
            case "ArrowDown" :
                y += moveAmount;
                break;
            case "ArrowLeft" :
                x -= moveAmount;
                break;
            case "ArrowRight" :
                x += moveAmount;
                break;
        }

        emoji.style.top = `${y}px`;
        emoji.style.left = `${x}px`;
    }
});