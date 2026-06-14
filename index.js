const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne=document.getElementById("one")
let passwordTwo=document.getElementById("two")

let lengthOfPassword=15

function generatePassword(){
    let password=""
    for(let i=0;i<lengthOfPassword;i++){
        let randomNumber=Math.floor(Math.random()*characters.length)
        password+=characters[randomNumber] 
    }
    
    return password
}
function renderPasswords(){
    console.log("button clicked")
    passwordOne.textContent=generatePassword()
    passwordTwo.textContent=generatePassword()
}

function copyPasswordOne() {
    if(passwordOne.textContent){
        navigator.clipboard.writeText(passwordOne.textContent)
    }
    
}

function copyPasswordTwo() {
    if(passwordTwo.textContent()){
        navigator.clipboard.writeText(passwordTwo.textContent)
    }
    
}

/*function copyPasswordOne() {
    console.log(passwordOne.textContent)
}*/
