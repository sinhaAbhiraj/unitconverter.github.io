"use strict";


console.log("connected")

function converter() {

    // 1. Functon declaration .. conversion of celcius to fahrenheit

    function cToF(celsius) {

        let cTemp = celsius;

        let cToFahr = cTemp * 9 / 5 + 32;

        return cToFahr;
    }







    // 2. Functon expression .. conversion of kilogram to pounds

    var kg = function (kilogram) {

        let kToPound = kilogram * 2.2;
        return kToPound;

    }


    //   3. Arrow function for conversion of feet to centimeter





    const fToC = (enterinfeet) => {
        let f = enterinfeet * 30.48;
        return f;
    }






    console.log("Celcius to Fahrenheit is " + cToF(100));


    console.log("Kg To Pounds is " + kg(9));



    console.log("Feet tocentimeter is " + fToC(50));


}
converter();
