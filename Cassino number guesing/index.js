function signuppage() {

    var newwindow = window.open("signup.html","_self");
    // window.close();
}
function loginpage() {
    var nevwindow = window.open("login.html", "_self");
    //window.close();
}


// function done() {
//     const fname = document.getElementById("f-name").value;
//     const lname = document.getElementById("l-name").value;


//     const pass1 = document.getElementById("pass1").value;
//     const pass2 = document.getElementById("pass2").value;

//     if (pass1 === "") {

//         return false;
//     } else {
//         if (pass1 === pass2) {

//             localStorage.setItem(fname, pass1);
//             loginpage();

//             document.getElementById("f-name").value = '';
//             document.getElementById("l-name").value = '';
//             document.getElementById("pass1").value = '';
//             document.getElementById("pass2").value = '';

//         } else {
//             const incorrectElement = document.getElementsByClassName("incorrect");
//             for (let i = 0; i < incorrectElement.length; i++) {
//                 incorrectElement[i].style.display = "block";
//             }
//         }
//     }


// }
var database = {};
function done() {
    const fname = document.getElementById("f-name").value;
    const lname = document.getElementById("l-name").value;


    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if (pass1 === "") {

        return false;
    } else {
        if (pass1 === pass2) {

        
            localStorage.setItem(fname, JSON.stringify({
                password: pass1,
                balance: 1000,
                name: lname,
            }));
            
            loginpage();

            document.getElementById("f-name").value = '';
            document.getElementById("l-name").value = '';
            document.getElementById("pass1").value = '';
            document.getElementById("pass2").value = '';

        } else {
            const incorrectElement = document.getElementsByClassName("incorrect");
            for (let i = 0; i < incorrectElement.length; i++) {
                incorrectElement[i].style.display = "block";
            }
        }
    }


}

let parsedObject;
function login() {
    const logname = document.getElementById("log-name").value;
    const logpass = document.getElementById("log-pass").value;

    var storedObject = localStorage.getItem(logname);


    parsedObject = JSON.parse(storedObject);
    
    

    if (logpass === parsedObject.password) {
       
        document.getElementById("log-name").value = '';
        document.getElementById("log-pass").value = '';
        const incorrectElement = document.getElementsByClassName("incorrect");
        for (let i = 0; i < incorrectElement.length; i++) {
            incorrectElement[i].style.display = "none";
            
        }
      


        let openedWindow = window.open("home.html", "_self");

        
        if (openedWindow) {
            openedWindow.onload = function () {
                
                openedWindow.document.getElementById("we-name").textContent = 'Balance: ' + parsedObject.balance;
            };
        }

    }
    else {
        const incorrectElement = document.getElementsByClassName("incorrect");
        for (let i = 0; i < incorrectElement.length; i++) {
            incorrectElement[i].style.display = "block";
        }
    }
}

function rules()
{
    window.open("text.txt", "_self");
}

function start()
{
    window.open("game.html", "_self")
}
function load()
{
    window.open("game.html" , "_self")
}
function balance()
{
    window.open("balance.txt", "_self")
}
let amount = 1000;
function dice()
{
    if(amount > 0){

    
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    let guess = document.getElementById("guess").value;
    
   
    if(guess == randomNumber)
    {
        amount=amount*10;
        alert("Hurray");
        document.getElementById("balance").textContent = 'balance :' + amount;
    }
    else{
        amount = amount-100;
        alert("try again");
        document.getElementById("guess").value = '';
        document.getElementById("balance").textContent = 'Balance : ' + amount;
    }}
    else{
        alert("insuffient balance");
    }
}
// function data() {
//     if (parsedObject) {
//         console.log(parsedObject.balance);
//         alert(parsedObject);
//        } else {
//         return null;
//     }
// }