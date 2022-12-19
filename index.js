const names=["Guadalupe", "Ollie", "Aki"];
function writeCards( names, event ) {
    let completedCards= []
    for(let i = 0; i < names.length; i++){
        completedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        console.log(completedCards);
    }
    return completedCards;
}

writeCards(names, "Surprise")

let down=[11];

function countDown(down){
    debugger;
    while(down >= 0 ){
        console.log(down--);
    }
    return down;
}

countDown(down);