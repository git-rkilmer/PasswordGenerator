const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let givenPassword1 = document.querySelector("#password-1");
let givenPassword2 = document.querySelector("#password-2");

const randomIndexGenerator = () => {
    return Math.floor(Math.random() * characters.length);
}

const generatePassword = () => {
    let randomPassword = "";

    for (let i = 0; i < 15; i++) {
        randomPassword += characters[randomIndexGenerator()];
    }

    return randomPassword;
}

const getRandomPasswords = () => {
    document.getElementById("password-container").style.display = "flex";
    givenPassword1.textContent = generatePassword();
    givenPassword2.textContent = generatePassword();
}

givenPassword1.addEventListener("click", () => {
    navigator.clipboard.writeText(givenPassword1.textContent);
    alert("Password copied!");
})

givenPassword2.addEventListener("click", () => {
    navigator.clipboard.writeText(givenPassword2.textContent);
    alert("Password copied!");
})
