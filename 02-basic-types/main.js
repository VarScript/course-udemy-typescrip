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
    class Mutand {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutanPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
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
(() => {
    let sum;
    sum = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map