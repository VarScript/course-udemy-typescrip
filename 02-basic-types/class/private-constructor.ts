(() => {
    
    class Apocalypse {
        static intance: Apocalypse;
        private constructor( public name:string ){}
        static callApocalypse(): Apocalypse {
            if ( !Apocalypse.intance ) {
                Apocalypse.intance = new Apocalypse('I am the unic apocalypse...')
            }
            return Apocalypse.intance
        }

        changeName( newName:string) {
            this.name = newName;
        }
    }

    const apocalypse1 = Apocalypse.callApocalypse();
    const apocalypse2 = Apocalypse.callApocalypse();
    const apocalypse3 = Apocalypse.callApocalypse();

    apocalypse1.changeName('Fabito')

    // console.log(apocalypse1, apocalypse2, apocalypse3);
    

    // const apocalypse = new Apocalypse('I am the Apocalypse...')
    // console.log(apocalypse);
    
})()