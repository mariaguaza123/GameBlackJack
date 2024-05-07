//vars
let pointsG = 0;
const divCardGamer = document.querySelector('.gamer');

const pointsGamer = (card) =>{
    pointsG = pointsG + valueCard(card);
    smalls[0].innerText = pointsG;
}

const imageCardGamer = (card) => {
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    divCardGamer.append( imgCard);
}



const turnGamer = (card) => {
    pointsGamer(card);
    imageCardGamer(card);
}