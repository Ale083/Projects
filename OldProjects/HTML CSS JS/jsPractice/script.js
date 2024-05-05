const textInput = document.getElementById("textInput");
const paragraph = document.getElementById("paragraph");
function Submit() {
  paragraph.innerHTML += textInput.value + " "
}
function Reset() {
  paragraph.innerHTML = ""
}
/*

- Create text input, button and paragraph elements.
- When the button is clicked, add the input's content into the paragraph element spaced out. Note: do not replace the content of the paragraph, only add to it.
- Style everything to look really nice.

*/