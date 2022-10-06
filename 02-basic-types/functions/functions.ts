(() => {

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'Actived Batisignal!';
    }

    console.log(typeof activateBatisignal);

    const heroName = returnName();
    
})()