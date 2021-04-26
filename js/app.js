'use strict'

let username=prompt("What is your name")
console.log(username)
alert("welocom to our site "+username)

let userQ1=prompt("Do you think my name is Suad ?").toLowerCase();

switch(userQ1){
    case "yes":
        console.log("greet")
        alert("greet")
        break;
        case "no" :
        console.log("not true");
        alert("nooo")
        break
        default:
            console.log("you must answer yes/no")
}


let userQ2=prompt("Do you think I like burger ?").toLowerCase();

switch(userQ2){
    case "yes":
        console.log("greet")
        alert("You are right")
        break;
        case "no" :
        console.log("not true");
        alert("You are not right")
        break
        default:
            console.log("you must answer yes/no")
}



let userQ3=prompt("Do you think I like bmw car ?").toLowerCase();

switch(userQ3){
    case "yes":
        console.log("greet")
        alert("Of course")
        break;
        case "no" :
        console.log("not true");
        alert("You did not guess")
        break
        default:
            console.log("you must answer yes/no")
}



let userQ4=prompt("Do you think I like snakes ?").toLowerCase();

switch(userQ4){
    case "yes":
        console.log("false")
        alert("Nooo")
        break;
        case "no" :
        console.log("not true");
        alert("Of course no, who did that")
        break
        default:
            console.log("you must answer yes/no")
}


let userQ5=prompt("Do you think I like to travel ?").toLowerCase();

switch(userQ5){
    case "yes":
        console.log("true")
        alert("Who did not")
        break;
        case "no" :
        console.log("not true");
        alert("no I like it")
        break
        default:
            console.log("you must answer yes/no")
}

alert ("Thank you for joining us "+ username)