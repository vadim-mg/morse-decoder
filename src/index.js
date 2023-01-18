const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
}

const CHAR = {
  11: "-",
  10: ".",
  "00": "",
  "**": " ",
}

function decode(expr) {
  let result = ""
  let char = ""
  let i = 0

  while (i < expr.length) {
    char += CHAR[expr[i] + expr[i + 1]]
    
    if ((i + 2) % 10 === 0) {
      result += MORSE_TABLE[char]
      char = ""
    } else if (char === " ") {
      result += " "
      char = ""
      i = i + 8
    }

    i = i + 2
  }
  return result
}

module.exports = {
  decode,
}