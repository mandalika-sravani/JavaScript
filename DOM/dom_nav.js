// DOM Navigation --The process of navigating through the structure of an 
//                      HTML document using JavaScript

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// ------.firstElementChild-----

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "orange";
});

//----.lastElementChild-----

const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});

//-------.nextElementSibling---

const element = document.getElementById("carrot");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "pink";

//-------.previousElementSibling---

const element2 = document.getElementById("ice");
const prevSibling = element2.previousElementSibling;
prevSibling.style.backgroundColor = "blue";

//--------.parentElement------

const pelement = document.getElementById("apple");
const parent = pelement.parentElement;
parent.style.backgroundColor = "black";