let bill = document.getElementById('bill');
let service = document.getElementById('service');
let numOfClients = document.getElementById('numOfClients');
let totalBillDisplay = document.getElementById('totalBill');
let tipDisplay = document.getElementById('tip');
let billPerPersonDisplay = document.getElementById('billPerPerson');
let tipPerPersonDisplay = document.getElementById('tipPerPerson');


document.getElementById("calculate").addEventListener("click", calculateTip);
document.getElementById("reset").addEventListener("click", reset);

function calculateTip() {    
    if(isNaN(parseInt(bill.value)) || isNaN(parseInt(service.value)) || isNaN(parseInt(numOfClients.value))) return 0;
    let individualBill = 0; 
    let tip = parseInt(bill.value) * service.value/100;
    let totalbill = parseInt(bill.value) + tip;
    individualBill = totalbill / parseInt(numOfClients.value);    
    totalBillDisplay.innerHTML = `<strong>₦${thousandSeperator(totalbill.toFixed(2))}`;
    tipDisplay.innerHTML = `<strong>₦${thousandSeperator(tip.toFixed(2))}`;
    billPerPersonDisplay.innerHTML = `<strong>₦${thousandSeperator(individualBill.toFixed(2))}`;
    tipPerPersonDisplay.innerHTML = `<strong>₦${thousandSeperator((tip/parseInt(numOfClients.value)).toFixed(2))}`;
}

function reset() {
    bill.value = "";
    service.value = "";
    numOfClients.value = "";
    totalBillDisplay.innerHTML = `0.00`;
    tipDisplay.innerHTML = `0.00`;
    billPerPersonDisplay.innerHTML = `0.00`;
    tipPerPersonDisplay.innerHTML = `0.00`
}

function thousandSeperator(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}