"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let force;
    (function (force) {
        force[force["Acuaman"] = 0] = "Acuaman";
        force[force["Batman"] = 1] = "Batman";
        force[force["Flash"] = 5] = "Flash";
        force[force["Superman"] = 100] = "Superman";
    })(force || (force = {}));
    const fuerzaSuperman = force.Superman;
    const fuerzaBatman = force.Batman;
    const fuerzaFlash = force.Flash;
    const fuerzaAcuaman = force.Acuaman;
    // Retorno de funciones
    const activar_batiseñal = () => {
        return 'activada';
    };
    const pedir_ayuda = () => {
        console.log('Auxilio!!!');
    };
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    let a = enumeracion.d;
    console.log(a);
})();
