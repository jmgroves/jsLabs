var arr1 = ['cat','dog','frog','giraffe',7,'bar'];
var arr2 = ['cherry','pineapple','banana','bar',7];
var arr3 = ['lemon', 'cherry','banana','giraffe',7,'bar'];
var win = true;

var arr4 = ['dog', 'dog'];
var arr5 = ['dog', 'dog'];
var arr6 = ['dog', 'dog'];

function spin(){
  var arr = [];
  for(let i = 0; i < arguments.length; i++){
    arr.push(arguments[i][Math.floor(Math.random() * arguments.length + 1)]);
  }
  return arr;
}
console.log(spin(arr1, arr2, arr3));


function spinTheWheel(arr5){
  var outcome = winner(arr5);
  console.log(winner(outcome));
}

function winner(arr4){
  var idx = 0;
  for(let i = 0; i < arr4.length - 1; i++){
    idx += 1;
    if(!(arr4[i] === arr4[idx])){
      win = false;
    }

  }
  return win;

}

var spin1 = spin(arr1, arr2, arr3);
spinTheWheel(spin1);
var spin2 = spin(arr4, arr5, arr6);
console.log(spin2);
spinTheWheel(spin2);
