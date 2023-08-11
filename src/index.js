const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(str) {
    let arr = str.split('');

let arrSliced = [];

while (arr.length > 0 ) {
  const sliced = arr.splice(0, 10).join('');
  arrSliced.push(sliced);
}

let arrReplaced = [];
for(let item of arrSliced) {
  let elem = '10';
  while(item.includes(elem)) {
    item = item.replace(elem, '.');
  }
  arrReplaced.push(item);
}

let arrReplaced2 = []; 
for(let item of arrReplaced) {
  let elem = '11';
  while(item.includes(elem)) {
    item = item.replace(elem, '-');
  }
  arrReplaced2.push(item);
}

for(let i=0; i < arrReplaced2.length; i++) {
  arrReplaced2[i] = arrReplaced2[i].replace(/\d/g, '');
}

let result = '';

for(let elem of arrReplaced2) {
  result = result + MORSE_TABLE[elem];
}
return result;
}

module.exports = {
    decode
}