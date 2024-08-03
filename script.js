document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { name: 'A', img: 'A' },
        { name: 'A', img: 'A' },
        { name: 'B', img: 'B' },
        { name: 'B', img: 'B' },
        { name: 'C', img: 'C' },
        { name: 'C', img: 'C' },
        { name: 'D', img: 'D' },
        { name: 'D', img: 'D' }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('#game-grid');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsMatched = [];

    function createBoard() {
        cardArray.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.setAttribute('data-id', index);
            cardElement.setAttribute('class', 'card');
            cardElement.addEventListener('click', flipCard);
            grid.appendChild(cardElement);
        });
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.textContent = cardArray[cardId].img;

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const [optionOneId, optionTwoId] = cardsChosenId;

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            cards[optionOneId].classList.add('matched');
            cards[optionTwoId].classList.add('matched');
            cardsMatched.push(cardsChosen);
        } else {
            cards[optionOneId].textContent = '';
            cards[optionTwoId].textContent = '';
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsMatched.length === cardArray.length / 2) {
            alert('Selamat! Anda telah menemukan semua pasangan kartu!');
        }
    }

    createBoard();
});