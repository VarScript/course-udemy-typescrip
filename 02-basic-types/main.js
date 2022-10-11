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
})();
(() => {
    const client = {
        name: 'Fabio',
        age: 21,
        address: {
            id: 120,
            zip: 'HS6',
            city: 'Roma'
        }
    };
    const client2 = {
        name: 'Any',
        age: 24,
        address: {
            id: 140,
            zip: 'HS6',
            city: 'China'
        }
    };
})();
//# sourceMappingURL=main.js.map