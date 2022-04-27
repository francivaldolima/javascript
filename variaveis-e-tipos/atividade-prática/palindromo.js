//-----------------------Solução 1----------------------------------------------- 

// function palindrome(str){
//     if(!str) return "string inexistente";

//     return str.split("").reverse().join("") === str;
// }
// console.log(palindrome("ama"));

//-----------------------Solução 2-----------------------------------------------

function palindrome(str){
    if(!str) return "string inexistente";

    for(let i=0; i < str.length / 2; i++){
       if( str[i] !== str[str.length -1 - i]){
            return false;
       }
    }
    return true;
}

console.log(palindrome("gato"));
//-----------------------Solução 3-----------------------------------------------

// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join('');
//     return reverseStr === lowRegStr;
//   }

// console.log(palindrome("A man, a plan, a canal. Panama"));


//-----------------------Solução 4-----------------------------------------------

// function palindrome(str) {
//   var re = /[^A-Za-z0-9]/g;
//   str = str.toLowerCase().replace(re, "");
//   var len = str.length;
//   for (var i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome("A man, a plan, a canal. Panama"));
