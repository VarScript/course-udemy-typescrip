import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';


const name:string = 'Fabio';
console.log( genericFunctionArrow( 3.1416 ).toFixed(2) );
console.log( genericFunctionArrow( name ).toUpperCase() );
console.log( genericFunctionArrow( new Date ).getDate() );


