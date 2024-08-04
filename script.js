// add event listener DOMContentLoaded untuk dokumen agar script dijalankan sesaat setelah dokumen di load'
document.addEventListener('DOMContentLoaded', () => {
    //inisiasi array
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
    

    cardArray.sort(() => 0.5 - Math.random());      //fungsi untuk mengacak array

    const grid = document.querySelector('#game-grid');          //inisiasi dokumen dengan mentargetkan id
    //buat array kosong
    let cardsChosen = [];      
    let cardsChosenId = [];
    let cardsMatched = [];

    // buat fungsi
    function createBoard() {                    
        cardArray.forEach((card, index) => {            //lakukan perulangan sejumlah cardArray, masukkan masing2 value ke card, kemudian simpan index elemen ke index
            const cardElement = document.createElement('div');      //buat div
            cardElement.setAttribute('data-id', index);             //set atribut data-id cardElemen nilai index
            cardElement.setAttribute('class', 'card');              //set atribut class dengan card
            cardElement.addEventListener('click', flipCard);        //add event click dengan memanggil fungsi
            grid.appendChild(cardElement);          //jadikan cardElemen child dari grid
        }); 
    }

    //buat fungsi
    function flipCard() {
        let cardId = this.getAttribute('data-id');          //inisiasi dengan mengambil nilai dari atribut
        cardsChosen.push(cardArray[cardId].name);           //masukkan cardArray dengan index ke cardChoosen.name merupakan properti array
        cardsChosenId.push(cardId);                         //masukkan cardId ke cardsChosenId
        this.textContent = cardArray[cardId].img;           //masukkan properti img dari cardArray dengan index cardId ke textContent

        if (cardsChosen.length === 2) {                     //jika panjang 2
            setTimeout(checkForMatch, 500);                 //set timeout, setengah detik
        }
    }


    //buat fungsi
    function checkForMatch() {
        const cards = document.querySelectorAll('.card');       //pilih semua selector class card
        const [optionOneId, optionTwoId] = cardsChosenId;       //destruksi array cardsChosenId menjadi 2 kemdudian masukkan ke [optionOneId, optionTwoId

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {     //jika cardsChosen index pertama sama dengan cardsChosen index ke 2 dan optionOneId tidak sama dengan optionTwoId
            cards[optionOneId].classList.add('matched');            //card id tambahkan class matched
            cards[optionTwoId].classList.add('matched');            //card id tambahkan class matched
            cardsMatched.push(cardsChosen);                         //push cardChosen ke cardsMatched
        } else {                                                //sebaliknya
            cards[optionOneId].textContent = '';                    //kosongkan cards
            cards[optionTwoId].textContent = '';                    //kosongkan cards
        }

        // buat array kosong
        cardsChosen = [];
        cardsChosenId = [];

        if (cardsMatched.length === cardArray.length / 2) {         //jika panjang cardsMatched sama dengan panjang cardArray dibagi 2
            alert('Selamat! Anda telah menemukan semua pasangan kartu!');   //omedetto
        }
    }

    createBoard();                  //summon fungsi
});