
const userInput = () => {
let input = document.getElementById('user-input').value
let output = document.getElementById('display-element').innerHTML = input
let translate= document.getElementById('final');
translate.addEventListener('click', pigLatin)
}






// let inputText = document.getElementById("user-input");
//   var outputText = document.getElementById("display-element");
//   document.getElementById("btn").addEventListener('click', function() {
//     outputText.value = pigLatin(inputText.value);
//   }) 


// const userInput = () => {
//   console.log("hello")
//   let input = document.getElementById('user-input')
//   let text =""
//   let i
//   for(i = 0; i < input.length; i++) {
//     text += input.elements[i].value
//   } 
//   document.getElementById('display-element').innerHTML = text
// }

const pigLatin = (word) => {
    let pigLatinWord = word.trim().toLowerCase()
     const pigVowels = ['a', 'e', 'i', 'o', 'u']
     let finalTranslate = ''
    
     if(pigVowels.includes(pigLatinWord[0])){
       return finalTranslate = pigLatinWord + "yay"
     } else {
       for (let w = 0;  w < pigLatinWord.length; w++){
         if (pigVowels.includes(pigLatinWord[w])) {
            finalTranslate = pigLatinWord.slice(w) + pigLatinWord.slice(0,w) + 'ay'
            break
         }
       }
     }
   
   return finalTranslate
     // Your code here
   }
   