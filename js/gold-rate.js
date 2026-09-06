// Gold rates for demonstration purposes

const goldRates = {

    gold24: 15250,

    gold22: 13980,

    gold18: 11440

};


// Home page gold rates

const gold24Element =
    document.getElementById("gold24");

const gold22Element =
    document.getElementById("gold22");

const gold18Element =
    document.getElementById("gold18");


if (gold24Element) {

    gold24Element.textContent =
        "₹" +
        goldRates.gold24.toLocaleString("en-IN");

}


if (gold22Element) {

    gold22Element.textContent =
        "₹" +
        goldRates.gold22.toLocaleString("en-IN");

}


if (gold18Element) {

    gold18Element.textContent =
        "₹" +
        goldRates.gold18.toLocaleString("en-IN");

}


// Product page gold rate

const goldRateElement =
    document.getElementById("goldRate");


if (goldRateElement) {

    goldRateElement.textContent =
        "₹" +
        goldRates.gold22.toLocaleString("en-IN");

}


// Updated message

const updatedElement =
    document.getElementById("goldUpdated");


if (updatedElement) {

    updatedElement.textContent =
        "Updated today • Hyderabad";

}