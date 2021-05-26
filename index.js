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

// titles
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

// 'job' words
const middles = [
    'Slayer',
    'Curator',
    'Creator',
    'Master',
    'Teacher',
    'Forger'
];

// dramatic nouns
const ends = [
    'Dragons',
    'Swords',
    'Darkness',
    'Light',
    'Hearts'
];


// function to general a random index of an array, regardless of array's length
const generateRandomIndex = arr => {

    return Math.floor(Math.random() * arr.length);

};


// generates a random messages
const generateRandomMessage = (name) => {

    // get a random index from each array and save it
    const beginning = beginnings[generateRandomIndex(beginnings)];
    const middle = middles[generateRandomIndex(middles)];
    const end = ends[generateRandomIndex(ends)];

    // log the message
    console.log(`${beginning} ${name}, ${middle} of ${end}.`)

};



// TEST

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

// SAMPLE OUTPUT
/*

Count Michael, Creator of Darkness.
Empress Matt, Slayer of Light.
Viscountess Bekka, Creator of Swords.
Grand Duke Danielle, Master of Darkness.
Prince Amanda, Slayer of Dragons.
Viscountess Kayla, Creator of Darkness.
Grand Duchess Nathan, Creator of Dragons.
Prince Jackie, Curator of Darkness.
Marquis Hannah, Creator of Dragons.
Countess Signe, Slayer of Light.

*/