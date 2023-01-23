



const userInput = () => {
let input = document.getElementById('user-input').value
let output = document.getElementById('display-element')
return output.innerHTML = pigLatin(input)
    }



// let inputText = document.getElementById("user-input");
//   var outputText = document.getElementById("display-element");
//   document.getElementById("btn").addEventListener('click', function() {
//     outputText.value = pigLatin(inputText.value);
//   }) 


// const userInput = () => {
//   let input = document.getElementById('user-input')
//   let text =""
//   for(let i = 0; i < input.length; i++) {
//     text += input[i].value
//   } 
//   document.getElementById('display-element').innerHTML = pigLatin(text)
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
   