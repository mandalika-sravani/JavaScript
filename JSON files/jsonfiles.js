// JSON(JavaScript Object Notation) Files --- data-interchanging format used for 
//              exchanging data between a server and a web application 
//              JSON files {key: value} or [value1, value2, value3]

//          JSON.stringify() -- converts JS objects to a JSON string
//          JSON.parse() -- converts a JSON string to a JS object


fetch("names.json")
     .then(response => response.json())
     .then(value  => console.log(value));

fetch("person.json")
     .then(response => response.json())
     .then(value  => console.log(value));

fetch("people.json")
     .then(response => response.json())
     .then(values  => values.forEach(value => console.log(value)));

fetch("people.json")
     .then(response => response.json())
     .then(values  => values.forEach(value => console.log(value.name)));


