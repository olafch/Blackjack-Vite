import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} cartTypes Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} specialTypes Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (cartTypes, specialTypes) => {
  let deck = [];

  if (!cartTypes || cartTypes.length === 0)
    throw new Error("cartTypes is compulsory as a string array");

  if (!specialTypes || specialTypes.length === 0)
    throw new Error("specialTypes is compulsory as a string array");

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
