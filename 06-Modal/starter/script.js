'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const openModals = document.querySelectorAll('.show-modal');

for (let i = 0; i < openModals.length; i++) {
    openModals[i].addEventListener('click', function() {
        console.log('hi');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    })
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }

})