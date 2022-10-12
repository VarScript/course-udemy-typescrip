"use strict";
var Validations;
(function (Validations) {
    Validations.vaidateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.vaidateText('Fab'));
//# sourceMappingURL=main.js.map