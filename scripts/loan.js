   function computeLoan(){
const amount = document.querySelector('.loan-input').value;
const interest_rate = document.querySelector('.interest-input').value;
const monthlyPay = document.querySelector('.months-input').value;
// console.log(amount);


const btn = document.querySelector('#compute-loan');
const loanOutput = document.querySelector('#loan-output')
console.log(btn);
console.log(loanOutput);

const monthlyInterest = (amount * (interest_rate * 0.01)) / monthlyPay;
let monthlyPayment = ((amount / monthlyPay) + monthlyInterest).toFixed(2);
 monthlyPayment = monthlyPayment.toString();

loanOutput.innerHTML = monthlyPayment;


}

