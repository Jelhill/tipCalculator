
document.addEventListener("click", function(e) {
    if (e.target.id === "calculate") {   
        let bill = parseInt(document.getElementById('bill').value);
        let service = parseInt(document.getElementById('service').value);
        let numOfClients = parseInt(document.getElementById('numOfClients').value);
        let totalbill = bill + (bill * service/100);
        individualBill = totalbill / numOfClients
        document.getElementById('result').innerHTML = individualBill
    }
})
