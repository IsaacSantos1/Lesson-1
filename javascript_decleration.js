// declare width and height of a rectangle, print the area to the console

let length=5;
let width=10;

let area= length*width;
console.log(area);
//Task 2 go to w3 schools and figure out what is the difference between var, let and const
//Answer:
/* var lets you redeclare and update a variable, has a funcion scope
let does not allow redeclaration but allows updating, has a block scope
*/

var a=10;
function myName(){
    a=20;
    return a;
}
myName();
console.log(a);

let b=10;
function myLast(){
    let b=20;
    return b;
}
myLast();
console.log(b);
// var will change the value inside function call
// We will try to only use let and const  from now onwards