import _ from "underscore";

export const crearDeck = (cartTypes, specialTypes) => {
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of cartTypes) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of cartTypes) {
    for (let esp of specialTypes) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
