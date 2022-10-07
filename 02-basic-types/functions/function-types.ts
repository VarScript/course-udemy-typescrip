(() => {
    
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hello ${name}`;
    const saveTheWorld = () => `The World it is salved!`;

    let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction);
    
    // let myFunction: (a:number, b:number) => number;
    // myFunction = addNumbers;
    // console.log(myFunction(1,4));

    // let myFunction: (name:string) => string;
    // myFunction = greet;
    // console.log(myFunction('Fabio'));

    myFunction = saveTheWorld;
    console.log(myFunction());

})()