
function printToConsole( constructor:Function ) {
    console.log(constructor);
}

const printToControlConditional = ( print:boolean = false ):Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {}
    }
    
}

@printToControlConditional( true )
export class Pokemon  {
    public publicApi = 'http://pokeapi.co';
    constructor(
        public name:string
    ){}
}