

console.log("Calculate local invoked")

function calculate(){

let amount = parseInt(document.getElementById("amount").value)
console.log(`amount: ${amount}`);

let rate = parseInt(document.getElementById("rate").value)
console.log(`rate: ${rate}`);

let tax = (amount * rate)/100;
console.log(`tax: ${tax}`);

let total = amount + tax;
console.log(`total: ${total}`);

let content = `TaxAmount: ${amount}, TotalAmount: ${total}`;
console.log(`content: ${content}`);

let result = document.getElementById('result');
result.innerHTML = content;


console.log(`************Thank you**************`);

}

