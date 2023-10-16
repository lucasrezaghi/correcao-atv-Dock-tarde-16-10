let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function changeSign() {
  if (displayValue !== '0') {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
  }
}

updateDisplay();
