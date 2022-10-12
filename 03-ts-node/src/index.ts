// as is an alias of Hero
// import { Hero as superHero} from './classes/Hero';
// const ironman = new superHero('Ironman', 100, 55);

// Access of all of the export of that file
// import * as HeroClasses from './classes/Hero';
// const ironman = new HeroClasses.Hero('Ironman', 100, 55);


// import powers, { Power } from './data/powers';


import { Hero } from './classes/Hero';

const ironman = new Hero('Ironman', 1, 55);

console.log(ironman);
console.log(ironman.power);
