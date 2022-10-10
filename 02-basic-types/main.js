"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    console.log(apocalipsis);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
const plus = (a, b) => {
    return a + b;
};
console.log(plus(20, 4));
const count = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(count(superHeroes));
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unitHeros = (...personas) => {
    return personas.join(", ");
};
console.log(unitHeros());
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1, 'a', true, [1, 2, 3, 4, 5]));
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('Tony');
    console.log({ name: name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The World it is salved!`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Actived Batisignal!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry',
        age: 24,
        powers: ['Super velocity', 'Travel in the time']
    };
    let superman = {
        name: 'Clark Clen',
        age: 24,
        powers: ['Super velocity']
    };
    console.log(flash);
})();
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
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Doctor Strange';
    console.log(avenger.charAt(0));
    avenger = 150.54465;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    const villians = ['Red Omega', 'Dormammu', 'Thanos'];
    villians.forEach(v => console.log(v.toUpperCase()));
    numbers.forEach(v => console.log(v));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Please');
    console.log('Hello word');
})();
(() => {
    let nothing = undefined;
    console.log(nothing);
})();
(() => {
    let avengers = 2;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We have a problem');
    }
    else {
        console.log('These bitches are dead');
    }
    avengers = Number('234A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const greenLantern = "Green Lantern";
    const blackVolcano = `Hero: Black Volcano`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Is not present');
})();
(() => {
    const singer = ['Dr still', 199, true];
    singer[0] = 'Snoop Doog';
    singer[1] = 198;
    singer[2] = false;
    console.log(singer);
})();
(() => {
    function callBatman() {
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map