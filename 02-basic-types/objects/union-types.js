"use strict";
(() => {
    let myCustonVariable = 'Fabio';
    console.log(typeof myCustonVariable);
    myCustonVariable = 20;
    console.log(typeof myCustonVariable);
    myCustonVariable = {
        name: 'Vargas',
        age: 29,
        powers: [38]
    };
    console.log(typeof myCustonVariable);
})();
