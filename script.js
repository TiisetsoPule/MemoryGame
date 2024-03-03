const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});




























// const cards = document.querySelectorAll(".card");

// let cardOne, cardTwo;

// function flipCard(e){
//     // console.log(e.target)
//     let clickedCard = e.target;  //getting user clicked card
//    if(clickedCard !== cardOne){
//     clickedCard.classList.add("flip"); //add the class flip when the targeted elment is clicked
//     if(!cardOne){
//         // Return the cardOne value to clickedCard
//         return cardOne = clickedCard;
//     }
//     cardTwo = clickedCard;

//     let cardOneImg = cardOne.querySelector("img").src,
//     cardTwoImg = cardTwo.querySelector("img").src;
//     matchedCards(cardOneImg, cardTwoImg);
//    }
//  }

// function matchedCards(img1, img2){
//     // console.log(img1, img2)
//     if (img1 === img2){ //if two cards img matcged
//         return console.log("Card Matched")
//     }

// }

// cards.forEach(card => { // adding click event to all cards
//     card.addEventListener("click", flipCard)
// })