(() => {

    type Avengers = {
        name: string,
        weapon: string
    }

    const ironman: Avengers = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }
    
    const capAmerica: Avengers = {
        name: 'Captain America',
        weapon: 'Shield'
    }

    const thor: Avengers = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }
    
    const avengers: Avengers[] = [ironman,thor,capAmerica]
    for (const avenger of avengers) {
        // console.log(avenger.name, avenger.weapon);
        
    }
})()