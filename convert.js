// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);


//feet and inch
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft '  + inchRemaining + ' inch ';
    return result;
}

const shuvoHeight2  = inchToFeet2(75);

// console.log(shuvoHeight2);

// miles to km

function mileTokilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const kilo = mileTokilometer(30);
console.log(kilo);

//km to miles

function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}



