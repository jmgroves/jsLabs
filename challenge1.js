var testString1 = "giraffe";
var testString2 = "The quick brown fox jumped over the lazy dog"

function transform(word){
var count = 1;
var wordArr = Array.from(word);

for(let i = 0; i < wordArr.length; i++){
  if(wordArr[i] === 'a' || wordArr[i] === 'e' || wordArr[i] === 'u' || wordArr[i] === 'o' || wordArr[i] === 'i' || wordArr[i] === 'y'){
    wordArr[i] = count;
    count += 1;
  }
}
console.log(wordArr);
return wordArr.join('');
}

console.log(transform(testString1));
console.log(transform(testString2));

var input = prompt("enter a string");

console.log(transform(input));
