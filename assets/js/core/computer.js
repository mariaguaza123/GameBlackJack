//vars
let pointsC = 0;
const divComputer = document.querySelector('.computer');

const pointsComputer = (card) =>{
    pointsC = pointsC + valueCard(card);
    smalls[1].innerText = pointsC;
}

const turnComputer = (minPoinstGamer, card) => {
    pointsComputer(card);
    const imgCardCom = document.createElement('img');
    imgCardCom.src = `assets/cartas/${card}.png`;
    divComputer.append(imgCardCom);
}
