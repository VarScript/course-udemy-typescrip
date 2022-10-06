"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Actived Batisignal!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
