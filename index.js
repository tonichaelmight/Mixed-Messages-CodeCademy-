// @tonichaelmight
// Mixed Messages
// CodeCademy FullStack Track
// 26 May 2021

/* PROJECT PROMPT
For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, 
inspirational message, or nonsensical jokes. 
To make your program truly random, the message that it outputs should be made up of 
at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking.
*/

// main function generateRandomMessage() will take a name as an argument, interpolating it with three random pieces, one from each array below.

// beginnings
const beginnings = [
    'Prince',
    'Princess',
    'Duke',
    'Duchess',
    'Grand Duke',
    'Grand Duchess',
    'Marquis',
    'Marquess',
    'Count',
    'Countess',
    'Earl',
    'Viscount',
    'Viscountess',
    'Baron',
    'Baroness',
    'Lord',
    'Lady',
    'Emporer',
    'Empress',
    'King', 
    'Queen'
];


const middles = [
    'Slayer',
    'Curator',
    'Creator',
    'Master'
];

const ends = [
    'Dragons',
    'Swords',
    'Darkness',
    'Light'
];

const generateRandomIndex = arr => {

    return Math.floor(Math.random() * arr.length);

};

const generateRandomMessage = (name) => {

    const beginning = beginnings[generateRandomIndex(beginnings)];
    const middle = middles[generateRandomIndex(middles)];
    const end = ends[generateRandomIndex(ends)];

    console.log(`${beginning} ${name}, ${middle} of ${end}.`)

};

// me n all my homies
const names = [
    'Michael',
    'Matt',
    'Bekka',
    'Danielle',
    'Amanda',
    'Kayla',
    'Nathan',
    'Jackie',
    'Hannah',
    'Signe'
]

console.log(' ');
names.forEach(name => {
    generateRandomMessage(name);
});
console.log(' ');