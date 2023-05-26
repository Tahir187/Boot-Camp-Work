const chessStory = `He played the king in a8 she moved her c2`;

const moods = `happy 🙂, confused 😕, sad 😢`;


// [xyz]
// [a-c]

const regexMatch1 = /\b[a-c]\w+/g;
console.log(chessStory.match(regexMatch1));

// . match any single character
const regexMatch2 = /\b[.c]\w+/g;
console.log(chessStory.match(regexMatch2));

// \d matches any digits

const digits = `1, 2,3`
const regexMatch3 = /[\d]\w+/g;
console.log(digits.match(regexMatch3));