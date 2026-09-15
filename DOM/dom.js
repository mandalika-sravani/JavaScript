// DOM -- Document Object Model
//          Object{} that represents the page you see in web browser and provides you with an 
//          API to interact with it.
//          Web browser constructs the DOM when it loads an HTML document and structures all
//          the elements in a tree like representation. JavaScript access DOM to dynamically
//          change the content, structure and style of a web page

const userName = "Sravani";
const wel = document.getElementById("welcome");

wel.textContent += userName === "" ? `Guest` : userName;