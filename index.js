    let player={
        playerName:"Aman",
        playerMoney: 200,
    }


    let cards=[];
    let sum = 0;
    let hasBlackJack = false
    let isAlive = false;
    let message = ""
    let messageEl = document.getElementById("message-el")
    let sumEl = document.getElementById("sum-el")
    let playerEl=document.getElementById('player-el')
    let cardsEl = document.getElementById("cards-el")

     playerEl.textContent=player.playerName +": "+"₹"+player.playerMoney;
     console.log(cards);
function startGame(){
    isAlive=true;
    hasBlackJack=false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard, secondCard];
    sum=cards[0]+cards[1];
    renderGame();

}


function getRandomCard() {
    let randomCard= Math.floor(Math.random()*13) + 1;
    if(randomCard === 1){
        return 11
    }
    else if (randomCard >=11 && randomCard<= 13){// more than 10 bhi likh sakte the
        return 10
    }
    else {
    return randomCard;
  }
}


function renderGame() {
    cardsEl.textContent = "cards: ";
    for(let i=0;i < cards.length; i++){
     cardsEl.textContent +=cards[i]+" ";

    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}


function newCard(){
    if(isAlive=== true && hasBlackJack=== false){

    let card=getRandomCard();
    sum +=card;
    cards.push(card);
    renderGame();
    }
    else if(isAlive===false && hasBlackJack === false) {
        messageEl.textContent="Sorry,You are not alive in the Game to get a new card.";
    }
    else if( hasBlackJack=== true){
        messageEl.textContent="You don't need any card ,Sir, You have won Blackjack!";
    }
    //else if(isAlive===true && hasBlackJack===true)

}
//Array is a complex data type,methods are functions on an object,
/* for(let i=0; i< sentence.length; i++){
    greetingEl.textContent=sentence[i];
    console.log(greetingEl.textContent)
    paragraph mein keval aakhri value display hogi ,last iteration wali poorana clear 
    hota jaata hai.poorane ko saath lekar chalne ke liye += krna padega;
    # If ka keval ek hi block hi execute hota hai
    # function declaration wale tareeke se agar functions likhenge to wo top pr hoist honge matlab they will even be accessible at line one;there are other ways of creating functions that dont get this benefit
} */