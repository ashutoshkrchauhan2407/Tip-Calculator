const varObj = {
    tip: 0
}
window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
    document.querySelector('#reset').onclick = resetValue;

    const tips = document.querySelectorAll('.tip');
    tips.forEach(tip => {
        tip.addEventListener('click', handleTipClick);
    })
}

function handleTipClick(e) {
    varObj.tip = Number(e.target.textContent.split('%')[0]);
}

function calculateTip() {
    const amount = Number(document.querySelector('#amount').value);
    const person = Number(document.querySelector('#person').value);

if (!amount && !person) {
    alert("Please enter values");
    return;
} 
const tip = (amount*varObj.tip) / 100;
const billPerPerson = (amount+tip) / person;

document.querySelector('#tipamount').innerText = tip/person;
document.querySelector('#totalamount').innerText = billPerPerson;

}

function resetValue(){
    document.querySelector('#tipamount').innerText = 0;
    document.querySelector('#totalamount').innerText = 0;
      
}