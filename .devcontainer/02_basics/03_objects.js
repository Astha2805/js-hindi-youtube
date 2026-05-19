//Objects can be declared using literals(no singleton) and constructors(singleton)
//singleton - Object.create(constructor)

//object literals
const JsUser = {
    name:"Astha",
    "full name": "Astha Mohanty",
    age: 21,
    mySym: "mykey1",
    location: "Hyderabad",
    email: "astha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}
//accessing objects - console.log(JsUser.email) , console.log(JsUser["email"])
console.log(JsUser.email)
console.log(JsUser["full name"])
console.log(JsUser["mySym"])  

Object.freeze(JsUser)
console.log(JsUser) 

JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting());