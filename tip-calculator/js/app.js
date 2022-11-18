const billInputElement = document.getElementById('bill-value')
const customInputElement = document.getElementById('input-tip')
const numberOfPeopleElement = document.getElementById('number-of-people')
const labelPeopleErrorMsgElement = document.getElementById('label-people-error-msg')
const amountPerson = document.getElementById('amount-person')
const amountTotal = document.getElementById('amount-total')
const tipElements = document.querySelectorAll('.tip')
const btnResetElement = document.getElementById('btn-reset')

const TIP_DEFAULT_VALUE = 15;
const TIP_DEFAULT_NUMBER_OF_PEOPLE = 1;

numberOfPeopleElement.value = TIP_DEFAULT_NUMBER_OF_PEOPLE;

let billValue;
let tipPercentage = TIP_DEFAULT_VALUE;
let customTip;
let numberOfPeopleValue = TIP_DEFAULT_NUMBER_OF_PEOPLE;

billInputElement.addEventListener('input', (event) => {
  billValue = parseFloat(event.target.value);
  updateUI();
  disableResetButton();
})

customInputElement.addEventListener('input', (event) => {
  customTip = event.target.value;
  tipElements.forEach(element => {
    element.classList.remove('active');
  });
  updateUI();
})

numberOfPeopleElement.addEventListener('input', (event) => {
  numberOfPeopleValue = parseInt(event.target.value);
  if(!numberOfPeopleValue || numberOfPeopleElement < 1){
    labelPeopleErrorMsgElement.hidden = false;
  } else {
    labelPeopleErrorMsgElement.hidden = true;
    updateUI();
  }
  disableResetButton();
})

tipElements.forEach(element => {
  element.addEventListener('click', (event) => {
    tipElements.forEach(element => {
      element.classList.remove('active');
      customTip = null;
      customInputElement.value = "";
    })
    element.classList.add('active');
    tipPercentage = event.target.outerText.slice(0, -1);
    updateUI();
  })
})

btnResetElement.addEventListener('click', () => {
  reset()
})

function reset(){
  numberOfPeopleElement.value = "";
  billInputElement.value = "";
  amountPerson.textContent = "0.00";
  amountTotal.textContent = "0.00";
  disableResetButton();
}

function updateUI(){
  const obj = calculateTip(billValue, tipPercentage, numberOfPeopleValue, customTip);
  amountPerson.textContent = `$${obj.valuePerPerson.toFixed(2)}`;
  amountTotal.textContent = `$${obj.total.toFixed(2)}`;
}

function calculateTip(bill, tipPercentage, peopleAmount, customTip) {
  customTip = parseInt(customTip)
  if(customTip){
    return {
      valuePerPerson: customTip / peopleAmount,
      total: (bill + customTip) / peopleAmount
    }
  }
  
  if(bill >= 0 && tipPercentage >= 0 && peopleAmount >= 1) {
    return {
      valuePerPerson: (bill * tipPercentage / 100) / peopleAmount,
      total: (bill * (1 + (tipPercentage / 100))) / peopleAmount
    }
  }
  return {
    valuePerPerson: 0,
    total: 0
  }
}

function disableResetButton() {
  if(!billInputElement.value || !numberOfPeopleElement.value){
    btnResetElement.disabled = true;
  } else {
    btnResetElement.disabled = false;
  }
}