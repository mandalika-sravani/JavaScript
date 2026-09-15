// ES6 Modules -- An external file that contains reusable code that can be imported into 
//                  other JavaScript files. Write reusable code for many different apps.
//                  Can contain variables, classes, functions,....

import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

const circumference = getCircumference(6);
const area = getArea(6);
const volume = getVolume(6);

console.log(PI);
console.log(`Circumference : ${circumference.toFixed(2)} cm`);
console.log(`Area : ${area.toFixed(2)} cm^2`);
console.log(`Volume : ${volume.toFixed(2)} cm^3`);