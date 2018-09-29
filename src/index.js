module.exports = function check(str, bracketsConfig) {
  const stackBrackets = [];
  const openingB = [], closingB = [];

  if (str.length % 2 != 0){
    return false;
  }
  //create arrays for opening and closing brackets separately
  for (let i=0, brLeng = bracketsConfig.length; i<brLeng; i++){
      openingB.push(bracketsConfig[i][0]);
      closingB.push(bracketsConfig[i][1]);
  }

  for (let j=0, strLeng = str.length; j < strLeng; j++){
    for (let k=0, opLeng = openingB.length; k < opLeng; k++){
      if (str[j] == openingB[k] && openingB[k] == closingB[k]){  //if brackets are the same
        if(str[j] == stackBrackets[stackBrackets.length-1]){
          stackBrackets.pop();
        }
        else {
          stackBrackets.push(str[j]);
        }
      }
      else if(str[j] == openingB[k]){
        stackBrackets.push(str[j]);
        }
      else if (str[j] == closingB[k]){
        if (stackBrackets.length == 0 || stackBrackets.pop() != openingB[k]) {
          return false;
        }
      }
    }
  }
    
  if (stackBrackets.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
