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