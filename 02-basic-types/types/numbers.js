"use strict";
(() => {
    let avengers = 2;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We have a problem');
    }
    else {
        console.log('These bitches are dead');
    }
    avengers = Number('234A');
    console.log({ avengers });
})();
