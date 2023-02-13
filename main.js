const mainDisplay = document.querySelector('.rating__container');
const thankYou = document.querySelector('.thanks__container');
const form = document.querySelector('.rating__btn');
const userSelection = document.querySelector('.final-rate');
const rateAgain = document.querySelector('#rate-again');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const rating = form.rating.value;

    userSelection.textContent = `You selected ${rating} out of 5`;
    mainDisplay.classList.add('hidden');
    thankYou.classList.remove('hidden');
})


rateAgain.addEventListener('click', () => {
    mainDisplay.classList.remove('hidden');
    thankYou.classList.add('hidden');
})
