import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
import { Hero } from './interfaces/hero';
import { Villain } from './interfaces/villain';

// const name:string = 'Fabio';
// console.log( genericFunctionArrow( 3.1416 ).toFixed(2) );
// console.log( genericFunctionArrow( name ).toUpperCase() );
// console.log( genericFunctionArrow( new Date ).getDate() );


const deadpool = {
    name: 'Deadpoll',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>( deadpool ).dangerLevel );

