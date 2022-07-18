console.log("This is a script");

translateBtn = document.querySelector("#translateBtn");

inputText = document.getElementById("inputText");

outputText = document.getElementById("outputText");


const morseCodeToEnglish = (morseCode) => {
  const translate = {
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "-----": "0", //falsey if not in quotes
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
  };
  
  return morseCode
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
  const translate = {
    A:".-",
    B:"-...",
    C:"-.-.",
    D:"-..",
    E:".",
    F:"..-.",
    G:"--.",
    H:"....",
    I:"..",
    J:".---",
    K:"-.-",
    L:".-..",
    M:"--",
    N:"-.",
    O:"---",
    P:".--.",
    Q:"--.-",
    R:".-.",
    S:"...",
    T:"-",
    U:"..-",
    V:"...-",
    W:".--",
    X:"-..-",
    Y:"-.--",
    Z:"--..",
    "0":"-----", 
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
  };
  
  return outputText.value = english
    //first split indicates where the space between words are
    .split(" ")
    //use map to "translate" from morse code to english
    .map(a => a
         //by further spliting up each individual code
         .split("")
         //use map again so we can translate at each index of the array
         .map(b => translate[b])
         //join the array at the second split level (create word)
         .join(" "))
    //join the array at the first split level (join words with a space)
    .join("");
};

translateBtn.addEventListener("click", () => {
  let english = inputText.value;
  console.log(english);
  englishToMorseCode(english);
  console.log(outputText.value);
});
