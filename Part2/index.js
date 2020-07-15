
let inputCardId = document.getElementById('input-card-id');
let inputCardColor = document.getElementById('input-card-color');

console.log('All Cards: ', allCardColorReset);
console.log('Card ID: ', inputCardId);
console.log('Card Color: ', inputCardColor);

function setCard() {
    let card = document.getElementById(inputCardId.value);
    let color = document.getElementById(inputCardColor.value);
    console.log('Card: ',card);
    
    if ( card.id === 'spades' || card.id === 'clubs' ) {
        card.style.color = 'black';
        color = 'black';
    } else if ( card.id === 'hearts' || card.id === 'diamonds' ) {
        card.style.color = 'red';
        color = 'red';
    }
    console.log('Suit is: ', card.id);
    console.log('Color: ',color);
}

function resetSelect() {
    let cardReset = document.getElementById('input-card-id')
    let colorReset = document.getElementById('input-card-color');
    let autoColorDisable = document.getElementById('autoColorSelect');
    let diamonds = document.getElementById('diamonds');
    let clubs = document.getElementById('clubs');
    let hearts = document.getElementById('hearts');
    let spades = document.getElementById('spades');
    cardReset.value = 'select-suit';
    colorReset.value = 'select-color';
    autoColorDisable.checked = false;
    diamonds.style.color = 'grey';
    clubs.style.color = 'grey';
    hearts.style.color = 'grey';
    spades.style.color = 'grey';
}

function autoSetColor() {
    let autoColorEnable = document.getElementById('autoColorSelect');
    console.log('Auto Color Status: ', autoColorEnable);
    if ( autoColorEnable.checked === true ) {
    console.log('Auto Color Activated');
    let cardAuto = document.getElementById('input-card-id')
    let colorAuto = document.getElementById('input-card-color');
    if ( cardAuto.value === 'spades' || cardAuto.value === 'clubs' ) {
        colorAuto.value = 'black';
        console.log('Auto Color Black');
        } else if ( cardAuto.value === 'hearts' || cardAuto.value === 'diamonds' ) {
       colorAuto.value = 'red';
       console.log('Auto Color Red');
        }
    }
}