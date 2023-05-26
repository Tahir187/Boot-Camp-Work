const text = 'A quick fox';
// last word in array
const assRegexLastWord = /\w+$/;
console.log(text.match(assRegexLastWord));

// full string in  array 
const assRegexWords = /\b\w+\b/g;
console.log(text.match(assRegexWords));

const regexFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexFoxQuality));