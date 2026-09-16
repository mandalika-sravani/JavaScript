// Promise -- An object that manages asynchronous operations. Wrap a Promise Object 
//              around {asynchronous code}
//              new Promise((resolve, reject) => {asynchronous code})

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked) {
                resolve("You walk the dog 🐕");
            }
            else {
                reject("You DIDN'T walk the dog 🐕");
            }
        }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned) {
                resolve("You cleaned the kitchen 🧹");
            }
            else {
                reject("You DIDN'T cleaned the kitchen 🧹");
            }
        }, 1500);
    });
}

function takeOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trash = true;
            if(trash) {
                resolve("You took the trash out ♻");
            }
            else {
                reject("You DIDN'T take the trash out ♻");
            }
        }, 1500);
    });
}

/*walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("All tasks completed")})
         .catch(error => console.error(error)); */

// Async --- makes a function return a promise 
// Await --- makes an async function wait for a promise
// Allows to write asynchronous code in a synchronous manner. Async doesn't have resolve,
//      reject parameters. Everything after Await is placed in event queue

async function doChores() {

    try {

        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const trashResult = await takeOutTrash();
        console.log(trashResult);

        console.log("All tasks completed");

    }
    catch(error) {
        console.error(error);
    }
}

doChores()
