// as is an alias of Hero
// import { Hero as superHero} from './classes/Hero';

// Access of all of the export of that file
import * as HeroClasses from './classes/Hero';
import powers, { Power } from './data/powers';


const ironman = new HeroClasses.Hero('Ironman', 100, 55);
console.log(ironman);

console.log(powers);
