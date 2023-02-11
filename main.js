const ratingContainer = document.querySelector('.rating__container');
const thanksContainer = document.querySelector('.thanks__container');
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');
const rates = document.querySelectorAll('.btn');
const rating = document.querySelector('.rating');

submitButton.addEventListener('click', function(){

    thanksContainer.classList.remove('hidden');
    ratingContainer.style.display = 'none';
})

rateAgain.addEventListener('click', function(){

    thanksContainer.classList.add('hidden');
    ratingContainer.style.display = 'block';
})

rates.forEach( function(rate){
    rate.addEventListener('click', function(){
        rating.innerHTML = rate.innerHTML;
    })
})