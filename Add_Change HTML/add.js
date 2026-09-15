//--------Example 1--------

//Step 1 CREATE THE ELEMENT

const newListItem = document.createElement("li");

//Step 2 ADD ATTRIBUTE/PROPERTIES

newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "seagreen"

//Step 3 APPEND ELEMENT TO DOM

//document.body.append(newListItem);
//document.getElementById("box2").append(newH1);
//const box4 = document.getElementById("box4");
//document.body.insertBefore(newH1, box4);

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[0]);

document.getElementById("fruits").append(newListItem);


//REMOVE HTML ELEMENT

document.getElementById("box2").removeChild(newH1);