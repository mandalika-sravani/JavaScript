// synchronous -- executes line by line consecutively in a sequential manner.
//                 Code that waits for an operation to complete

//asynchronous -- allows multiple operations to be performed concurrently without waiting
//                  Doesn't block the execution flow and allows the program to continue
//                  Callbacks, Promises, Async/Await are used

function fun1(callback) {
    setTimeout(() => {console.log("Task 1"), console.log("Task 2"), callback()}, 3000);
}

function fun2() {
    console.log("Task 3");
    console.log("Task 4");
    console.log("Task 5");
}

fun1(fun2);