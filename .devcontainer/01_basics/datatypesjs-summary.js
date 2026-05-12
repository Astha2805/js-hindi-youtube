//Primitive
//7types: String, Number, Boolean, null, undefined, Symbol,BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 345657892345122345667234455n

//Reference(Non primitive)
//Array, Objects, Functions 
const heros = ["shaktiman", "okla", "poko"];
let myObj = {
    name: "astha",
    age:21,
}
//declaring a func through variables
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);
// typeof operator:-
//null-object
//undefined- undefined
//boolean- boolean
//number- number
//String- string

console.log(typeof anotherId)