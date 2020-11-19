// TOPIC 1
// 1. Boolean operator answer true or false 
// Equality operator and expression (||: one or other is true, &&: both true)
// Help us to make decision
// 2. Condition statement
// Condition evaluate is true inside parentheses
var firstName = "Sam";
if (firstName == "Sam"){
    console.log("Hello, Sam!");
}else {
    console.log(" Hey, Tim");
}
// Another example
var costOfMilk = 2;
if(costOfMilk < 2){
    console.log("We will buy 2 gallons");
} else if(costOfMilk < 3){
    console.log("We will buy only 1 gallon");
}else{
    console.log("No thanks, way too expensive!");
}
//3. Switch statement used to create multiple option like grade for alphabetic order
var grade = "C";
switch(grade){
    case "A":
        console.log("90-100");
        break;
    case "B":
        console.log("80-89");
        break;
    case "C":
        console.log("70-79");
        break;
    default:
        console.log("0-69");
}
// 4. Nested if statement
var a = 5;
var b = 6;
if (a == 5){
    if(b == 6){
        console.log("a is 5 and b is 6");
    }
}
// Combine if statement- nested condition- flatten if not else
if(a == 5 && b == 6){
    console.log("a is 5 and b is 6");
}
//5. Loop allow to repeat until is true
//For loop if you know how many time we want to iterate
for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log("Whatever is next");

for (let i = 0; i < 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
//For loop for there is an array we want to iterate each one
let names = ["Sam","Tom","Hillary"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
// While loop over and over- reading file
let k = 0;
while(k < 10){
    console.log(k);
    k++;
}
// Do while loop execute at least one and continue to happen
do{
    console.log(k);
}while(k < 10);

// For in loop-index
for(i in names){
    console.log(names[i]);
    //console.log(i);
}
// For out loop- value
for(i of names){
    console.log(i);  
}
for(name of names){
    console.log(name); 
}
//6. INPUT
// Use prompt
var name = window.prompt("What is your name?");
window.alert(`Welcome, ${name}`);
// check input


var loggedIn = false;
while(!loggedIn){
    let username = prompt("Username: ");
    let password = prompt("Password: ");

    if (username == "jean123" && password == 12345){
        alert("Welcome back,"  + username);
    }else{
        alert("Incorrect username or password");
    }
    
}