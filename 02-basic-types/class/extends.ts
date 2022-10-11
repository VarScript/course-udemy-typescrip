(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Consturctor Avenger Called');
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutand: boolean
        ) {
            super(name, realName);
            console.log('Constructor Xmen called');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('The name must be greater than three letters')
            }
            this.name = name;
        }

        public getFullNameXmen() {
            console.log(super.getFullName());
            
        }
    }

    const wolverine = new Xmen('Wolverine','Logan', true);
    wolverine.fullName = 'Fabio';
    console.log(wolverine.fullName);
    // wolverine.getFullNameXmen();
    
})()