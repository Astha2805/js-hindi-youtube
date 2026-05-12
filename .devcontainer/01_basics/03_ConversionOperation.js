let score = "33ab" 
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 

//null - 0
//33 - 33
//33ab- NaN(not a number)
//undefined- NaN
//true-1, false-0

let isLoggedIn = 0 //(0-false, 1-true, empty-false, string-true)
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

let value = 3
let negValue = -value
console.log(negValue)
console.log(2+2)
console.log(2*2)
console.log(2-2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

let str1 = "hello"
let str2 = "astha"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

//console.log((3+4)*5%3)
console.log(+true);
console.log(+"")

let num1, num2, num3
num1=num2=num3=2+2
let gameConter=100;
gameConter++;
console.log(gameConter);