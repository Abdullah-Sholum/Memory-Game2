document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { name: 'A', img: 'A' },
        { name: 'A', img: 'A' },
        { name: 'B', img: 'B' },
        { name: 'B', img: 'B' },
        { name: 'C', img: 'C' },
        { name: 'C', img: 'C' },
        { name: 'D', img: 'D' },
        { name: 'D', img: 'D' },
        { name: 'E', img: 'E' },
        { name: 'E', img: 'E' },
        { name: 'F', img: 'F' },
        { name: 'F', img: 'F' },
        { name: 'G', img: 'G' },
        { name: 'G', img: 'G' },
        { name: 'H', img: 'H' },
        { name: 'H', img: 'H' },
        { name: 'I', img: 'I' },
        { name: 'I', img: 'I' },
        { name: 'J', img: 'J' },
        { name: 'J', img: 'J' },
        { name: 'K', img: 'K' },
        { name: 'K', img: 'K' },
        { name: 'L', img: 'L' },
        { name: 'L', img: 'L' },
        { name: 'M', img: 'M' },
        { name: 'M', img: 'M' },
        { name: 'N', img: 'N' },
        { name: 'N', img: 'N' },
        { name: 'O', img: 'O' },
        { name: 'O', img: 'O' },
        { name: 'P', img: 'P' },
        { name: 'P', img: 'P' },
        { name: 'Q', img: 'Q' },
        { name: 'Q', img: 'Q' },
        { name: 'R', img: 'R' },
        { name: 'R', img: 'R' },
        { name: 'S', img: 'S' },
        { name: 'S', img: 'S' },
        { name: 'T', img: 'T' },
        { name: 'T', img: 'T' },
        { name: 'U', img: 'U' },
        { name: 'U', img: 'U' },
        { name: 'V', img: 'V' },
        { name: 'V', img: 'V' },
        { name: 'W', img: 'W' },
        { name: 'W', img: 'W' },
        { name: 'X', img: 'X' },
        { name: 'X', img: 'X' },
        { name: 'Y', img: 'Y' },
        { name: 'Y', img: 'Y' },
        { name: 'Z', img: 'Z' },
        { name: 'Z', img: 'Z' },
        { name: 'A1', img: 'A1' },
        { name: 'A1', img: 'A1' },
        { name: 'B1', img: 'B1' },
        { name: 'B1', img: 'B1' },
        { name: 'C1', img: 'C1' },
        { name: 'C1', img: 'C1' },
        { name: 'D1', img: 'D1' },
        { name: 'D1', img: 'D1' },
        { name: 'E1', img: 'E1' },
        { name: 'E1', img: 'E1' },
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