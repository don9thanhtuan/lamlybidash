function xulytru() {
    let amountElement = document.getElementById('amount');
    let amount = parseInt(amountElement.value);
    if (amount > 1) {
        amount--;
        amountElement.value = amount;

        // Cập nhật lại tổng giá nhé Nâm
        updateTotalPrice();
    }
}

function xulycong() {
    let amountElement = document.getElementById('amount');
    let amount = parseInt(amountElement.value);
    amount++;
    amountElement.value = amount;

    // Cập nhật lại tổng giá
    updateTotalPrice();
}

function updateTotalPrice() {
    let amountElement = document.getElementById('amount');
    let unitPriceElement = document.getElementById('unit');
    let totalElement = document.getElementById('total');

    let amount = parseInt(amountElement.value);
    let unitPrice = parseFloat(unitPriceElement.getAttribute('data-value'));

    let total = amount * unitPrice;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function nutAdd() {
   // logic giỏ hàng
    alert('Added to Cart');
}
function xulytru() {
    let amountElement = document.getElementById('amount');
    let numberInputElement = document.getElementById('numberInput');

    let amount = parseInt(amountElement.value);
    if (amount > 1) {
        amount--;
        amountElement.value = amount;
        numberInputElement.value = amount; // Cập nhât input number

        // Cập nhật tổng giá
        updateTotalPrice();
    }
}

function xulycong() {
    let amountElement = document.getElementById('amount');
    let numberInputElement = document.getElementById('numberInput');

    let amount = parseInt(amountElement.value);
    amount++;
    amountElement.value = amount;
    numberInputElement.value = amount; // Cập nhật input number

    // Cập nhật lại tổng giá
    updateTotalPrice();
}

function updateTotalPrice() {
    let amountElement = document.getElementById('amount');
    let unitPriceElement = document.getElementById('unit');
    let totalElement = document.getElementById('total');

    let amount = parseInt(amountElement.value);
    let unitPrice = parseFloat(unitPriceElement.getAttribute('data-value'));

    let total = amount * unitPrice;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function nutAdd() {
    // Logic giỏ hàng
    alert('Added to Cart');
}
