

let costPerDish = 120
let numPeople = 8


function calcBill(costPerDish, numPeople) {
    const totalBill = costPerDish * numPeople;
    const billPerPerson = totalBill / numPeople;
    return ["totalBill: " + totalBill + ", " + "billPerPerson:" + billPerPerson];
}


const totalCost = calcBill(costPerDish, numPeople);
console.log(totalCost);

