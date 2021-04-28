'use strict'
//use
let username=prompt("What is your name")
console.log(username)
alert("welocom to our site "+username)

let userQ1=prompt("Do you think my name is Suad ?").toLowerCase();
let score=0
switch(userQ1){
    case "yes":
        console.log("greet")
        alert("greet")
        score=score+1
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
        score=score+1
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
        score=score+1
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
        alert("Of course no, who did that");
        score=score+1
        break
        default:
            console.log("you must answer yes/no")
}


let userQ5=prompt("Do you think I like to travel ?").toLowerCase();

switch(userQ5){
    case "yes":
        console.log("true")
        alert("Who did not");
        score=score+1
        break;
        case "no" :
        console.log("not true");
        alert("no I like it")
        break
        default:
            console.log("you must answer yes/no")
}

alert ("Thank you for joining us "+ username)


let myAge=Number(prompt("Guiss my age"))

for(let i=0;i<4;i++){
if (myAge==23){
    alert("great");
    score=score+1
    break;

}else if (i==3){
    alert("The correct answer is 23")
    break;
}
else if
     (myAge<23)
     
     {alert("too low");
    
 myAge=Number(prompt("Guess my age"));
    
    
    }


     else if (myAge>23){alert("too high")
         
 myAge=Number(prompt("Guess my age"));
    
    }}

    

    let cites =['amman','istanbul','paris','london'];
    let q1 = prompt("What is my favourit city?");
    let flag = false;
    for ( let i = 0; i< cites.length;i++){
    
    
        if (q1===cites[i]){
            
            alert("Coreect");
           flag = true;
            score=score+1
        
            break;
            
        } } if(flag === false) {
            for (let i =0;i<5;i++){
            alert("Noo");
            q1 = prompt("What is my favourit city?");
    
        }}
        alert("The correct answer " + ' amman '+' istanbul '+' paris '+' london ')

        alert("Your score is " + score)
