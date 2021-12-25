

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  display = document.getElementById('monthly-payment')
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});



function getCurrentUIValues() {
  
    let amount = (document.getElementById("loan-amount").value)
    let rate = (document.getElementById("loan-rate").value)
    let years = (document.getElementById("loan-years").value)
    

    return [amount, years, rate]
  
}


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues(uiValues) {
  let P = (document.getElementById("loan-amount").value)
    let i = ((document.getElementById("loan-rate").value)/100)/12
    let n = (document.getElementById("loan-years").value)*10
    let monthPay=(Math.round((P*i/(1 - Math.pow((1+i),-n))*100))/100)
    display.innerText = `$${monthPay}`

}


// Get the current values from the UI
// Update the monthly payment
function update() {
  let x = getCurrentUIValues()
  calculateMonthlyPayment(x)
  // setupIntialValues()
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values[0];
  let n = values[1]*12
  let i= (values[2]/100)/12;
  
  let monthlyPayment=(Math.round((P*i/(1 - Math.pow((1+i),-n))*100))/100)
  updateMonthly(monthlyPayment)
  
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  display.innerText = `$${monthly}`
}
