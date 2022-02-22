function getInputValue (fieldId, amount){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function getFieldValue (fieldId){
    const fieldValue = document.getElementById(fieldId);
    const valueField = fieldValue.innerText;
    const value = parseFloat(valueField);
    return value;
}
function updateAmount(fieldId, amount){
    // const updateTotal = document.getElementById(fieldId);
    // const previousTotal = updateTotal.innerText;
    // const totalPrevious = parseFloat(previousTotal);
    // const totalAmount = totalPrevious + amount;
    // updateTotal.innerText = totalAmount;
    const previousTotal = getFieldValue(fieldId);
    const totalAmount = previousTotal + amount;
    document.getElementById(fieldId).innerText = totalAmount;
    // return totalAmount;
}
// balance
function updateBalance(amount,isAdding){
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalance = balanceTotal.innerText;
    // const balancePrevious = parseFloat(previousBalance);
    // balanceTotal.innerText = newBalance;
    const balancePrevious = getFieldValue('balance-total');
    let newBalance;
    if(isAdding == true){
         newBalance = balancePrevious+ amount;
    }
    else
    {
        newBalance = balancePrevious- amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    const balance = getFieldValue('balance-total');
    if (amount > 0 && amount<=balance){
        updateAmount('deposit-total', amount);
        updateBalance(amount, true);
    }
    
});
// handle withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue('withdraw-input');
    const balance = getFieldValue('balance-total');
if (amount > 0 && amount<=balance){
    updateAmount('withdraw-total', amount);
    updateBalance(amount, false);
}
});