(() => {

    let flash: { name:string, age?:number, powers:string[], getName?: () => string } = {
        name: 'Barry',
        age: 24,
        powers: ['Super velocity', 'Travel in the time']
    }

    let superman: { name:string, age?:number, powers:string[], getName?: () => string } = {
        name: 'Clark Clen',
        age: 24,
        powers: ['Super velocity']
    }

    console.log( flash);
    
})()