(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 452.54894
    }

    // const { vision, power } = avengers;
    // console.log( vision.toUpperCase(), power.toFixed(2) );

    const printAvengers = ( { ironman, ...restA }:Avengers ) => {
        console.log(ironman, restA.active);
    }

    printAvengers(avengers);

})()