const prompt=require("prompt-sync")({sigint:true});

let firstName = prompt("Enter First Name: ")
let lastName = prompt("Enter Last Name: ")
console.log(firstName + " " + lastName)
