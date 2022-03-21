function checkPlayingCards(cardFace, cardSuit) {

    let objCardFace = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 'J', Q: 'Q', K: 'K', A: 'A',};
    let objCardSuit = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663', };

    let setter = (card, exist) => {
        if (!card[exist]) throw new Error();
        return card[exist]
    }
    let [face, suit] = [setter(objCardFace, cardFace), setter(objCardSuit, cardSuit)];

    const card = { face, suit, toString: () => `${face}${suit}` };

    Object.defineProperties(card, {
        face: {
            get() { return face },
            set: (cardFace) => setter(objCardFace, cardFace)
        }, suit: {
            get() { return suit },
            set: (cardSuit) => setter(objCardSuit, cardSuit)
        },
    });
    return card;
}

module.exports = { checkPlayingCards }