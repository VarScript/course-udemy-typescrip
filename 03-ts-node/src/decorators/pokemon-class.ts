
function printToConsole( constructor:Function ) {
    console.log(constructor);
}

@printToConsole
export class Pokemon  {
    public publicApi = 'http://pokeapi.co';
    constructor(
        public name:string
    ){}
}