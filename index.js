import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/dmytro-botnarenko/a-tiny-JS-world
   Web app: https://dmytro-botnarenko.github.io/a-tiny-JS-world/
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

const catWoman = {...woman};

catWoman.species = 'human-cat';
catWoman.name = 'Mell';
catWoman.saying = cat.saying;

// ======== OUTPUT ========

const creatures = [cat, dog, man, woman, catWoman];
const features = ['species', 'name', 'gender', 'legs', 'hands', 'saying'];

creatures.forEach((creature) => {print(features.map(feature => creature[feature]).join(' | '))})
