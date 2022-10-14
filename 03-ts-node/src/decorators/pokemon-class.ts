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

function CheckValuePokemonId () {
    return function( target:any, propertyKey:string, descriptor:PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id:number) => {
            if ( id < 1 || id > 800) {
                return console.error('The id of the pokemon that has to be from 1 to 800');
            } else {
                return originalMethod(id)
            }
        }
        // descriptor.value = () => console.log('Hello World');
    }
}

function readOnly( isWritable:boolean = true):Function {
    return function( target:any, propertyKey:string ) {
        const descriptor:PropertyDescriptor = {
            get(){
                console.log(this);
                return 'FF'
            }, 
            set( this, val){
                // console.log(this, val);
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
                
            }
        }
        return descriptor;
    }
}


@blockPrototype
@printToControlConditional( false )
export class Pokemon  {
    @readOnly(false)
    public publicApi = 'http://pokeapi.co';
    constructor(
        public name:string
    ){}

    @CheckValuePokemonId()
    savePokemonToDb(id:number) {
        console.log(`Pokemon in database ${id}`);
        
    }
}