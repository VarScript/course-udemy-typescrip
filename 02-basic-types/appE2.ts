// Funciones Básicas
const plus = ( a:number, b:number ) => {
  return a + b;
}
console.log(plus(20,4));


const count = ( heroes:string[] ):number => {
  return heroes.length;
}
const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(count(superHeroes));

//Parametros por defecto
const llamarBatman = ( llamar:boolean = true ):void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unitHeros = ( ...personas:string[] ):string => {
  return personas.join(", ");
}
console.log(unitHeros());


// Tipo funcion
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:number[] ) => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (numero:number, texto:string, booleano:boolean, arreglo:number[]) => void;
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1,'a',true,[1,2,3,4,5]));

