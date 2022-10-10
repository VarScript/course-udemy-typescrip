"use strict";
(() => {
    let flash = {
        name: 'Barry',
        age: 24,
        powers: [12]
    };
    let superman = {
        name: 'Clark Clen',
        age: 24,
        powers: [1],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
