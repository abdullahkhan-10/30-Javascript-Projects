const passwordBox = document.getElementById("password")
const myLength = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%&*()_-?/<>{}[]\/=!"

// use to add different all 8 random characters.
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let genePassword = ""

    // it will generate random value from upper case length, and add to genePassword
    genePassword += upperCase[Math.floor(Math.random() * upperCase.length)]  
    genePassword += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    genePassword += number[Math.floor(Math.random() * number.length)]
    genePassword += symbol[Math.floor(Math.random() * symbol.length)]

    // above we have added only 4 characters, to add all 8 characters we will run loop,
    // here the loop will stop when the genePassword length equal to myLength, and will gave 8 characters.
    while (myLength > genePassword.length) {
        genePassword += allChars[Math.floor(Math.random() * allChars.length)]
    }

    // To display the password on input box
    passwordBox.value = genePassword
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}