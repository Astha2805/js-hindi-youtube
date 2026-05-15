//Dates

let myDate = new Date()
console.log(myDate);
//converting date into string
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString())
console.log(myDate.toJSON())

let myCreatedDate = new Date("01-14-2026")
console.log(myDate.toLocaleDateString())
console.log(typeof myDate) //object

//let myCreatedDate = new Date(2026, 0, 23, 5, 3)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`
