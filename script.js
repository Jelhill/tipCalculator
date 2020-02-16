
document.getElementById("calculate").addEventListener("click", calculateTip);
document.getElementById("reset").addEventListener("click", reset);

function calculateTip() {
    let bill = parseInt(document.getElementById('bill').value);
    let service = parseInt(document.getElementById('service').value);
    let numOfClients = parseInt(document.getElementById('numOfClients').value);
    let individualBill = 0; 
    let tip = bill * service/100;
    let totalbill = bill + tip;
    individualBill = totalbill / numOfClients;
    document.getElementById('totalBill').innerHTML = `<strong>${totalbill.toFixed(2)}`;
    document.getElementById('tip').innerHTML = `<strong>${tip.toFixed(2)}`;
    document.getElementById('billPerPerson').innerHTML = `<strong>${individualBill.toFixed(2)}`;
    document.getElementById('tipPerPerson').innerHTML = `<strong>${(tip/numOfClients).toFixed(2)}`;
}

function reset() {
    document.getElementById('bill').value = "";
    document.getElementById('service').value = "";
    document.getElementById('numOfClients').value = "";
    document.getElementById('totalBill').innerHTML = `0.00`;
    document.getElementById('tip').innerHTML = `0.00`;
    document.getElementById('billPerPerson').innerHTML = `0.00`;
    document.getElementById('tipPerPerson').innerHTML = `0.00`
}