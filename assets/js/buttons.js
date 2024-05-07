
// Events
const btnTakeCard = document.querySelector('#TakeCard');
const btnNew = document.querySelector('#NewGame');
const btnStop = document.querySelector('#Stop');
const smalls = document.querySelectorAll('small');



// Functions
const disableButtons = () => {
    btnTakeCard.disabled = true;
    btnStop.disabled = true;
}

const chooseWin = (poinstGa, pointsComp) =>{
    if(poinstGa > 21 || pointsComp > 21  ){
        console.log('You lost the game');
        disableButtons();
        
    } else if(poinstGa === 21 || pointsComp === 21){
        console.log('You win the game');
        disableButtons();
    }
}

//Action when the user click on btn take card
btnTakeCard.addEventListener('click', () =>{
    turnGamer(takeCard());
    chooseWin(pointsG,pointsC);
    turnComputer(pointsG,takeCard());
    });
    
    //Action when the user click on btn new
    btnNew.addEventListener('click', ()=>{
        console.log('This is the button of new');
    });
    
    //Action when the user click on btn stop
    btnStop.addEventListener('click', ()=>{
        console.log('This is the button of stop');
    });