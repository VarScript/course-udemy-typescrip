(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string,
    }
    
    let myCustonVariable: (string | number | Hero) = 'Fabio';
    console.log(typeof myCustonVariable );

    myCustonVariable = 20;
    console.log(typeof myCustonVariable);

    myCustonVariable = {
        name: 'Vargas',
        age: 29,
        powers: [38]
    };
    console.log(typeof myCustonVariable);

    
})()