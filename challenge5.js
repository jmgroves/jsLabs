var card1 = "4485958988926791";
var card2 = "5317679549822037";
var card3 = "6011670680706409";
var card4 = "346810555926646";

var amex = /^3[47][0-9]{13}$/
var visa = /^4[0-9]{12}(?:[0-9]{3})?$/
var discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/
var masterCard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/




function cardReader(ccId){
  var isVisa = visa.test(ccId);
  if(isVisa === true){
    return "This is a Visa";
  }
  var isAmex = amex.test(ccId);
  if(isAmex === true){
    return "This is a American Express";
  }
  var isDiscover = discover.test(ccId);
  if(isDiscover === true){
    return "This is a discover card";
  }
  var isMasterCard = masterCard.test(ccId);
  if(isMasterCard === true){
    return "This is a Master Card";
  }
  return false;
}

console.log(cardReader(card1));
console.log(cardReader(card2));
console.log(cardReader(card3));
console.log(cardReader(card4));
