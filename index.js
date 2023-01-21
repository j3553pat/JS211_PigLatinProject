
let input = '';
let answerForm = document.getElementById('answerForm');

answerForm.addEventListener('submit', function(event) {
  event.preventDefault()
})

let userInput = document.getElementById('user-input');

    userInput.addEventListener('keyup', (e) => {
    console.log('hello')
})

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
   