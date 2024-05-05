const FirstHTML = document.getElementById("firstName");
const MiddleHTML = document.getElementById("middleName");
const LastHTML = document.getElementById("lastName");
const BirthHTML = document.getElementById("birthDate");
const EmailHTML = document.getElementById("email");
const PassHTML = document.getElementById("password");
const TaCHTML = document.getElementById("TaC");
const SubmitButton = document.getElementById("submit");
TaCConf = document.getElementById("TaCConf");
const hasNumber = /[0-9]/    // Regex pattern 
const hasLetter = /[A-Za-z]/
let PassFormatCorrect = false
let TaCisChecked = false

function Submit() {
  PassFormat()
  //TaCChecked()
  if (FormFilledCheck()) {
    IdTable.innerHTML = (Math.floor(Math.random() * (100 - 1)) + 1)
    FNTable.innerHTML = FirstHTML.value
    MNTable.innerHTML = MiddleHTML.value
    LNTable.innerHTML = LastHTML.value
    BDTable.innerHTML = BirthHTML.value
    EmailTable.innerHTML = EmailHTML.value
    PassTable.innerHTML = PassHTML.value
  }
}

SubmitButton.onclick = () => {
  Submit()
}

/*
  - On submission of the form, prevent the screen from refreshing, add a new row in the table with the content filled out. 
  - The id of the row is created automatically
*/


function PassFormat() {
  if (PassHTML.value.length > 7 && PassHTML.value.match(hasNumber) && PassHTML.value.match(hasLetter)) {
    PassReqs.innerHTML = ""
    return PassFormatCorrect = true
    //say if it has no numbers
  } else if (PassHTML.value.length > 7 && !PassHTML.value.match(hasNumber) && PassHTML.value.match(hasLetter)) {
    PassReqs.innerHTML = "Your password must have numbers"
    return PassFormatCorrect = false
    //say if it has no letters
  } else if (PassHTML.value.length > 7 && PassHTML.value.match(hasNumber) && !PassHTML.value.match(hasLetter)) {
    PassReqs.innerHTML = "Your password must have letters"
    return PassFormatCorrect = false
    //say if its not long enough
  } else if (PassHTML.value.length < 8 && PassHTML.value.match(hasNumber) && PassHTML.value.match(hasLetter)) {
    PassReqs.innerHTML = "Your password must have at least 8 characters"
    return PassFormatCorrect = false
    //say if it has no numbers/letters 
  } else if (PassHTML.value.length > 7 && !PassHTML.value.match(hasNumber) && !PassHTML.value.match(hasLetter)) {
    PassReqs.innerHTML = "Your password must have numbers and letters"
    return PassFormatCorrect = false
    //say if it has no numbers and its not long enough
  } else if (PassHTML.value.length < 8 && !PassHTML.value.match(hasNumber) && PassHTML.value.match(hasLetter)) {
    PassReqs.innerHTML = "Your password must have numbers and be at least 8 characters long"
    return PassFormatCorrect = false
    //say if it has no letters and its not long enough
  } else if (PassHTML.value.length < 8 && PassHTML.value.match(hasNumber) && !PassHTML.value.match(hasLetter)) {
    PassReqs.innerHTML = "Your password must have letters and be at least 8 characters long"
    return PassFormatCorrect = false
    //say if it has nothing of the needed stuff
  } else if (PassHTML.value.length < 8 && !PassHTML.value.match(hasNumber) && !PassHTML.value.match(hasLetter)) {
    PassReqs.innerHTML = "Your password must have numbers, letters and be at least 8 characters long"
    return PassFormatCorrect = false
  }
}/*
function TaCChecked() {
  if (TaCHTML.checked) {
    TaCConf.innerHTML = ""
    return TaCisChecked = true
  } else {
    TaCConf.innerHTML = "You have to agree to Terms and Conditions to enter"
    return TaCisChecked = false
  }
}*/
function FormFilledCheck() {
  if (PassFormatCorrect && !!FirstHTML.value && !!MiddleHTML.value && !!LastHTML.value && !!BirthHTML.value && !!EmailHTML.value) {
    return true
  }
}

