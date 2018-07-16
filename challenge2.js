var testString = "Hello world"


var countByLetters = function(word) {
/************************* Your Solution *************************/
var hits = {};
for (let i = 0; i < word.length; i++) {
if(word.charAt(i) !== " "){
  if(!hits.hasOwnProperty(word[i])){
    hits[word[i]] = 1;
  } else{
    hits[word[i]] += 1;
  }
}
}
return hits;


/*****************************************************************/
};

console.log(countByLetters(testString));

var input = prompt("enter a string");

console.log(countByLetters(input));
