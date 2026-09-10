// Variable-scope -- where a variable is recognised and accessible (local vs global)

let x = 3;

fun2();
fun1();

function fun1() {
    let x = 1;
    console.log(x);
}

function fun2() {
    //let x = 2;
    console.log(x);
}