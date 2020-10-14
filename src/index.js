const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let space = "**********";
    let point = "10";
    let dash = "11";
    let keys = Object.entries(MORSE_TABLE).flat();
    let arr = expr.split('').reduce((sum, item, index, array) => {
        if (((index + 1) < array.length) && ((index + 1) % 10 === 0)) {
            sum = `${sum}${item}~~`;
        } else if (((index + 1) < array.length) && ((index + 1) % 2 === 0)) {
            sum = `${sum}${item}~`;
        } else {
            sum = `${sum}${item}`
        } return sum
    }, '').split('~~').map(item => item.split('~'));

    arr = arr.map(item => {
        return item.map(item2 => item2 === "00" ? item2 = "" : item2 === point ? item2 = "." : item2 === dash ? item2 = "-" : item2).join('');
    }).map(item => item === space ? item = " " : keys.findIndex(item2 => item2 === item) >= 0 ? item = keys[keys.findIndex(item2 => item2 === item) + 1] : item).join('');
    return (arr);
}

module.exports = {
    decode
}