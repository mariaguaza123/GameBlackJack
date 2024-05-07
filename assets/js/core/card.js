/** 2C = Two of Clubs 
 *  2D = Two of diaminds 
 *  2H = Two of hearts 
 *  2S =  Two of Spades 
 **/

// Variables
let deck = [];
const types = ['C','D','H','S'];
const speciallyCards = ['A','J','Q'];

//Functions
const createDeck = () => {
    for(let i = 2 ; i <= 10 ; i++){
        for(let type of types){
            deck.push(i + type);
        }
    }
    for(let type of types){
        for(let spec of speciallyCards){
            deck.push(spec + type);
        }
    }
    return deck;
}

const shuffle = (arrayDeck) =>{

    let currentIndex = arrayDeck.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [arrayDeck[currentIndex], arrayDeck[randomIndex]] = [
        arrayDeck[randomIndex], arrayDeck[currentIndex]];
    }
    
};

const takeCard = () =>{
    const card = deck.pop();
    console.log('la carta  ',card);
    return card; 
}

const valueCard = (card) =>{
    try{
        const value = card.substring(0, card.length - 1);
        return ( isNaN( value ) ) ? 
                ( value === 'A' ) ? 11 : 10
                : value * 1;
    }catch(err){
        console.error('Was a problem with card : ', err);
    }
    
}



createDeck();
shuffle(deck);
console.log(deck);
