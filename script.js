//Palindrome CheckerPassed

let palindrome = (str)=>{
       
    if (str.toLowerCase().split("").reverse().join("").replace(/ /g,"")===str.toLowerCase().split("").join("").replace(/ /g,""))return (`la frase o palabra ${str} es un palindromo`)
    else return (`la frase o palabra ${str} no es un palindromo`)
    

}

console.log(palindrome("casac"));