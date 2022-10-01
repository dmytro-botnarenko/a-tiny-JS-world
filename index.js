import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const cat = {
   species: 'cat',
   name: 'Tom',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'miaow'
};

const dog = {
   species: 'dog',
   name: 'Spike',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'bow-wow!'
};

const man = {
   species: 'human',
   name: 'Jack',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'where is my slippers?'
};

const woman = {
   species: 'human',
   name: 'Jannie',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Honey, I\'m home!'
};
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

const catWoman = {...woman};

catWoman.species = 'human-cat';
catWoman.name = 'Mell';
catWoman.saying = cat.saying;

const creatures = [cat, dog, man, woman, catWoman];
const features = ['species', 'name', 'gender', 'legs', 'hands', 'saying'];

// function objString(obj) {
//    const arr = [];
//    features.forEach((feature) => {
//       arr.push(obj[feature]);
//    });
//    return arr.join(' | ');
// }

// creatures.forEach((creature) => {print(objString(creature))})

creatures.forEach((creature) => {print(features.map(feature => creature[feature]).join(' | '))})
