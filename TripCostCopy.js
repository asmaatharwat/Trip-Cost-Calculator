function calculateCost() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelPrice = parseFloat(document.getElementById('fuel-price').value);
    const consumption = parseFloat(document.getElementById('consumption').value);

    if (isNaN(distance) || isNaN(fuelPrice) || isNaN(consumption)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    const totalCost = (distance / 100) * consumption * fuelPrice;

    document.getElementById('cost-result').textContent = totalCost.toFixed(2);
    document.getElementById('result').style.display = 'block';
}
