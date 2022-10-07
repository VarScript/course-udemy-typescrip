"use strict";
// Funciones Básicas
const plus = (a, b) => {
    return a + b;
};
console.log(plus(20, 4));
const count = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(count(superHeroes));
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unitHeros = (...personas) => {
    return personas.join(", ");
};
console.log(unitHeros());
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1, 'a', true, [1, 2, 3, 4, 5]));
