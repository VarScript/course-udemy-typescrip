"use strict";
(() => {
    // The symbol ? is for the argument be optional
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
