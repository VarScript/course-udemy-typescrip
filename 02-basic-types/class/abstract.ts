(() => {

    abstract class Mutan {
        constructor(
            public name:string,
            public realName: string
        ){}
    }

    class Xmen extends Mutan {
        saveWord(){
            return 'Save has word'
        }
    }
    class Villian extends Mutan {
        conqueredWord(){
            return 'Conquered word'
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    // console.log(wolverine.saveWord());
    // console.log(magneto.conqueredWord());

    const printName = (character: Mutan) => {
        console.log(character.realName);
    }

    printName(magneto)
    
})()