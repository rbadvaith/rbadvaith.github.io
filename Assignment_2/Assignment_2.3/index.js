function calculateTotal() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    var tipAmount = subtotal * (tipPercentage / 100);
    var total = subtotal + tipAmount;
    document.getElementById('result').innerHTML = "The total amount to be paid including the tip is: " + total.toFixed(2);
}
