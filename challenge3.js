var testString = "This is a test";

function wordCounter(word){
  var countArr = word.split(' ');
  return countArr.length;
}

console.log(wordCounter(testString));
