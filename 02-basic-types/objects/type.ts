(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string,
    }

    let flash: Hero = {
        name: 'Barry',
        age: 24,
        powers: [12]
    }

    let superman: Hero = {
        name: 'Clark Clen',
        age: 24,
        powers: [1],
        getName() {
            return this.name
        }
    }


    console.log( flash);
    
})()