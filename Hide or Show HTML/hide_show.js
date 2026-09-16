
const hide = document.getElementById("hide");
const img = document.getElementById("car");

hide.addEventListener("click", event => {

    if(img.style.visibility === "hidden") {
        img.style.visibility = "visible";
        hide.textContent = "HIDE"; 
    }
    else {
        img.style.visibility = "hidden";
        hide.textContent = "SHOW";
    }
});
