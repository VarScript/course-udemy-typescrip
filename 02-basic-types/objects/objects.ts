(() => {

    let flash: { name:string, age?:number, powers:string[], getName?: () => string } = {
        name: 'Barry',
        age: 24,
        powers: ['Super velocity', 'Travel in the time']
    }

    flash = {
        name: 'Clark Clein',
        // age: 63,
        powers: ['Super strong'],
        getName(){
            return this.name;
        }
    }

    console.log( flash);
    
})()