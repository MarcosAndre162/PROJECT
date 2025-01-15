const cardsContainer = document.querySelector('.cards');
const totalCards = document.querySelectorAll('.card').length;
let currentIndex = 0;

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    const offset = -currentIndex * 100; // Move para o próximo card
    cardsContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(autoSlide, 3000); // Muda de card a cada 3 segundos

