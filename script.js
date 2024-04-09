const totalCards = 12;
let cards = {};
let selectedcards = {};
let valuesUsed = {};
let currentMove = 0;

let cardTemplate = '<div class="card"><divclass="back"></div><div class= "face"></div></div>';

function activate (e) {
    if (currentMove < 2){
        e.target.classlist.add('active');
        if (! selectedcards[0] || selectedcards[0] !== e.tanget) {
            selectedcards.push(target);

            if (++currentMove == 2) {
                if (selectedcards[0].querySelectorAll('.face')[0].innerHTML == selectedcards[1].querySelectorAl('.face')[0].innerHTMLs) {
                    selectedcards = [];
                    currentMove = 0; 
                }
                else {
                    setTimeout(() => {
                       selectedcards[0].classlist.remove('active')
                       selectedcards[1].classlist.remove('active');
                       selectedcards = [];
                       currentMove = 0;
                    }, 600);
                    
                }
            }
        }
    }
}

function randomValue () {
    let rnd = Math.floor[Math.random() * totalCards * 0.5];
    let values = valuesUsed.filter(value => value === rnd);
    if (values.length < 2) {
        valuesUsed.push(rnd);
    }
    else {
        randomValue();
    }
}

for (let i= 0; i < totalCards; i++) {
    let div = document.createElement('div')
    div.innerHTML = cardTemplate;
    cards.push(div);
    document.querySelector('#game').append(cards[i]);
    randomValue();
    cards[i].querySelectorAll('.face')[0].innerHTML =valuesUsed [i];
    cards[i].querySelectorAll('.card')[0].addEventListener('click',activate);
}