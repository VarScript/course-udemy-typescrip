"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 452.54894
    };
    const printAvengers = (_a) => {
        var { ironman } = _a, restA = __rest(_a, ["ironman"]);
        console.log(ironman, restA.active);
    };
    const avengersArr = ['Cap. America', true, 150];
    const [name, active, power] = avengersArr;
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const capAmerica = {
        name: 'Captain America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, thor, capAmerica];
    for (const avenger of avengers) {
    }
})();
(() => {
    const name = 'Fabio';
    const getName = () => {
        console.log('getName');
    };
})();
//# sourceMappingURL=main.js.map