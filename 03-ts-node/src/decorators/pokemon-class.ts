
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

const blockPrototype = function ( constructor:Function ){
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}


@blockPrototype
@printToControlConditional( true )
export class Pokemon  {
    public publicApi = 'http://pokeapi.co';
    constructor(
        public name:string
    ){}
}