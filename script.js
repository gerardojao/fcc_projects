//Palindrome CheckerPassed

let palindrome = (str)=>{
       
    if (str.toLowerCase().split("").reverse().join("").replace(/ /g,"")===str.toLowerCase().split("").join("").replace(/ /g,""))return (`la frase o palabra ${str} es un palindromo`)
    else return (`la frase o palabra ${str} no es un palindromo`)
    

}

console.log(palindrome("casac"));

//ROMAN NUMERAL CONVERTER

function convertToRoman(num) {
    let roman = {
        
        M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 
    },
  romanText ="";
  
    for(let item in roman){
        while(num >= roman[item]){
        romanText+=item
        num-=roman[item]
       }
      }
  return romanText;
  }
  
  console.log(convertToRoman(4999))