"use strict";
(() => {
    class Mutan {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutan {
        saveWord() {
            return 'Save has word';
        }
    }
    class Villian extends Mutan {
        conqueredWord() {
            return 'Conquered word';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutand) {
            super(name, realName);
            this.isMutand = isMutand;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('The name must be greater than three letters');
            }
            this.name = name;
        }
        getFullNameXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
(() => {
    class Apocalypse {
        constructor(name) {
            this.name = name;
        }
        static callApocalypse() {
            if (!Apocalypse.intance) {
                Apocalypse.intance = new Apocalypse('I am the unic apocalypse...');
            }
            return Apocalypse.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalypse1 = Apocalypse.callApocalypse();
    const apocalypse2 = Apocalypse.callApocalypse();
    const apocalypse3 = Apocalypse.callApocalypse();
    apocalypse1.changeName('Fabito');
    console.log(apocalypse1, apocalypse2, apocalypse3);
})();
//# sourceMappingURL=main.js.map