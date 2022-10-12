(() => {

    interface Xmen {
        name: string,
        realName: string,
        mutanPower(id:number):string
    }

    interface Human {
        age: number
    }

    class Mutand implements Xmen, Human {
        mutanPower(id:number){
            return `${this.name} ${this.realName}`
        }
        constructor(
            public age: number,
            public name: string,
            public realName: string,
        ){}
        
    }
})()