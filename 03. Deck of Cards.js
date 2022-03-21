const {checkPlayingCards} = require('./02. Playing Cards');

function printDeckOfCards(cards){
    const deck = []

    for (let i = 0; i < cards.length; i++) {
        const cardData = cards[i].split('');
        const [face, suit] = [
            cardData.slice(0, -1).join(''),
            cardData[cardData.length - 1]];

        try {
            deck.push(checkPlayingCards(face, suit).toString());
        } catch (e) {
            console.log(`Invalid card: ${cards[i]}`);
            return;
        }
    }

    return deck.join(' ');
}