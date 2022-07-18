//Morsecode to english
export const translate = {
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

//create seperate file for translate
//use this to flip the key and values
export const flipObj = (obj) => {
    const flipped = {};
    console.log(Object.entries(obj));
    Object.entries(obj).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        flipped[value] = key;
    });
    return flipped;
};
