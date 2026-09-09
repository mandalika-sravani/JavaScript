// Constants -- values that cannot be changed

const PI = 3.14;
let radius;
let circumference;
let area;

document.getElementById("calculateBtn").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius); // Convert the input value to a number
    circumference = 2 * PI * radius;
    area = PI * radius * radius;
    document.getElementById("cirresult").textContent = `Circumference: ${circumference} cm`;
    document.getElementById("arearesult").textContent = `Area: ${area} cm²`;
}