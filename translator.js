import{ translate, flipObj} from "./nonDOM.js";

const translateBtn = document.querySelector("#translateBtn");

const inputText = document.getElementById("inputText");

const outputText = document.getElementById("outputText");

const errorMessage = document.getElementById("errorMessage");

const morseCodeToEnglish = (morseCode) => {
  return outputText.value = morseCode
    //first split indicates where the space between words are
    .split("   ")
    //use map to "translate" from morse code to english
    .map(a => a
         //by further spliting up each individual code
         .split(" ")
         //use map again so we can translate at each index of the array
         .map(b => translate[b])
         //join the array at the second split level (create word)
         .join(""))
    //join the array at the first split level (join words with a space)
    .join(" ");
};

const englishToMorseCode = (english) => {
  let flip = flipObj(translate);
  console.log(flip);
  return outputText.value = english
    //first split indicates where the space between words are
    .split(" ")
    //use map to "translate" from morse code to english
    .map(a => a
         //by further spliting up each individual code
         .split("")
         //use map again so we can translate at each index of the array
         .map(b => flip[b])
         //join the array at the second split level (create word)
         .join(" "))
    //join the array at the first split level (join words with a space)
    .join("");
};


//add error handling

translateBtn.addEventListener("click", () => {
  let value = inputText.value.toUpperCase();
  
  if (value === "")
  {
    errorMessage.innerText = "Please input text";
    return;
  } //else if(!value.match(/[^./ -][a-z]/gi)) {
  //   errorMessage.innerText = "input is not morse code or english";
  //   return;
  // }

  console.log(errorMessage.innerText);
  
  console.log(value);
  //if the value does not have any of these symbols
  if (value.match(/[^./ -]/)) { 
    errorMessage.innerText = "";
    englishToMorseCode(value);
  } else 
  {
    errorMessage.innerText = "";
    morseCodeToEnglish(value)
  }
  
  console.log(outputText.value);
});
