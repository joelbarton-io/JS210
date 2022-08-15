let bill = Number(prompt("What is the bill?"));
let tipPercent  = (Number(prompt("What is the tip percentage?")) * .01);

let tip = (bill * tipPercent).toFixed(2);
let total = (Number(bill) + Number(tip)).toFixed(2);

console.log("The tip is: $" + tip);
console.log("The total is: $" + total);