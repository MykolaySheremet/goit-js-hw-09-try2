import Notiflix from 'notiflix';

const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const btnForm = document.querySelector('.form');

let firstDelay = 0;
let step = 0;
let amount = 0;

inputDelay.addEventListener('input', valuOfInputDalay);
inputStep.addEventListener('input', valueOfInputStep);
inputAmount.addEventListener('input', valueOfInputAmount);
btnForm.addEventListener('submit', createPromises);

function valuOfInputDalay(e) {
  return firstDelay = Number(e.target.value);
};

function valueOfInputStep(e) {
  return step = Number(e.target.value);
};

function valueOfInputAmount(e) {
  return amount = Number(e.target.value);
};


function createPromises(e) {
  e.preventDefault();
  createAllPromises(amount,step)
};

function createAllPromises(position, delay) {
  
  let startDelay = firstDelay;
  
  for (let i = 0; i < position; i += 1){
    
    let count = i + 1;
    let countDelay = startDelay

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          Notiflix.Notify.success(`✅ Fulfilled promise ${count} in ${countDelay}ms`);
          resolve(`✅ Fulfilled promise ${count} in ${countDelay}ms`);
        }
        else {
           
          Notiflix.Notify.failure(`❌ Rejected promise ${count} in ${countDelay}ms`)
          reject(`❌ Rejected promise ${count} in ${countDelay}ms`);
        }
      }, startDelay)
    });

    promise
      .then(value => {
    console.log(value);
    })
      .catch(error => {
        console.log(error);
      });
    
    startDelay += delay;
  }
}








// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
