
/* to define variables use 
let: if you expect a variable to change value
const: if you expect the variable to not change
*/
let input = document.getElementById("letterGuessed")
const underscores = document.getElementById("underscores")
let guessedLetters = []
const wordList = ["apple", "mother", "mouse", "orange", "tomato", "shampoo", "phone"]
tries = 7
triesHTML.innerHTML = tries
function randomChoice(list) {
  randomNumber = Math.floor(Math.random()*list.length)
  return list[randomNumber]
  
}
// strings are immutable

const secretWord = randomChoice(wordList)

//for each i in secretWord, do this...
for (let i in secretWord)
  underscores.innerHTML += "_ "

input.onchange = () => {
  console.log(input.value)
  let newUnderscores = ""
  for(let i in secretWord)
    if(input.value == secretWord[i]){
      newUnderscores += input.value + " "
    }else if(underscores.innerHTML[i*2] != "_") {
      newUnderscores += underscores.innerHTML[i*2] + " "
    }else{
      newUnderscores += "_ "
    }
  
  underscores.innerHTML = newUnderscores


  if(secretWord.includes(input.value) && !guessedLetters.includes(input.value)){ 
// if secret word includes input and it isnt in guessed letters
    console.log("The word contains " + input.value)
  }else if (secretWord.includes(input.value) && guessedLetters.includes(input.value)){
// if secret word includes input and it is in guessed letters
    console.log("You already used that letter, it is in fact correct.")   
  }else if(!secretWord.includes(input.value) && !guessedLetters.includes(input.value)){
// if secret word doesn't include input and it isn't in guessed letters
    console.log("The word doesn't contain " + input.value) 
  guessedLetters.push(input.value)
  guessedLettersHTML.innerHTML += input.value + " "
  tries = tries-1
  triesHTML.innerHTML = tries
}else if (!secretWord.includes(input.value) && guessedLetters.includes(input.value)){
    console.log("You already used that letter, please try again")


  }
  if (tries == 0) {
    playingDIV.style.display = 'none'
    Loser.style.display = 'block'
    console.log("You lost...")
    secretWordHTML.innerHTML = secretWord
}
  if(!newUnderscores.includes("_")){
    playingDIV.style.display = 'none'
    Winner.style.display = 'block'
    console.log("You won!")
    triesLeftHTML.innerHTML = tries
  }
}
  


