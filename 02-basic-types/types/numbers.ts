(() => {
    let avengers:number = 2;
    console.log(avengers);
    
    const villians: number = 20;

    if(avengers < villians){
        console.log('We have a problem');
    } else {
        console.log('These bitches are dead');
    }

    avengers = Number('234A');
    console.log({avengers});
    
})()