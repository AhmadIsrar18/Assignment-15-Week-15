
// function StringUtil() {

//     this.reverseWords = function(str) {
//         var result = "";
//         var wordArray = str.split(" ");
//         for(var i = wordArray.length - 1; i >= 0; i--) {
//             result += wordArray[i] + " ";
//         }
//         return result.trim();
//      }

// }

const str = 'Every One has a Dreams';
const reverseSentence = str => {
   const arr = str.split(" ");
   const reversed = arr.map(el => {
      return el.split('').reverse().join("");
   });
   return reversed.join(" ");
};
console.log(reverseSentence(str));