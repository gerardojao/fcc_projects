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
  
  /* Caesars CipherPassed
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on. */
function rot13(str) {
    let alphabet ={
      A:"N",B:"O",C:"P", D:"Q", E:"R", F:"S",G:"T", H:"U", I:"V", J:"W", K:"X", L:"Y", M:"Z", N:"A", O:"B", P:"C", Q:"D", R:"E", S:"F", T:"G", U:"H", V:"I", W:"J", X:"K", Y:"L", Z:"M"
    }
    let codeArr = str.split("");  
    let decodedArr = [];
    
  
    decodedArr = codeArr.map(el=>{
      if(alphabet.hasOwnProperty(el)) {
        el = alphabet[el];
      } 
      return el;
    });
  return decodedArr.join(""); 
  }
  
  console.log(rot13("SERR YBIR?"));

  //Cash Register
 


function checkCashRegister(price, cash, cid) {
    let coinsBills = { 
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    } 
     let msg ={
      status: "", change: []
    }
    msg.status = "INSUFFICIENT_FUNDS"
    
   
    let change=cash-price;
    let money=0
   
  
    cid.map(el=>{ money+=el[1]
    //if cid is less than the change due
        if(money<change)return msg
  
        else if(money==change){
        msg.status="CLOSED"
        msg.change = cid
        return msg
  
        } else {
        let cidRev = cid.reverse()
          for (const el of cidRev) {
  
              let cidTemp = [el[0], 0];
             // console.log(bills[el[0]] , el[1]);
           while (change>=coinsBills[el[0]] && el[1] > 0) {
              cidTemp[1] += coinsBills[el[0]];
              el[1] -= coinsBills[el[0]];
              change -= coinsBills[el[0]];
              change = change.toFixed(2);
          }
          if (cidTemp[1] > 0) {
          msg.change.push(cidTemp)
          msg.status="OPEN"
         };
         } 
       }
       //if you cannot return the exact change
       if (change > 0) {
       msg.status= "INSUFFICIENT_FUNDS" 
       msg.change=[]
    
      }
      return {
      status:"OPEN",
      change:msg.change
      }
   
    })
  
    return msg
  }
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  