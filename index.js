function printString(myString) {
  console.log(myString[0]);
  
  if(myString.length >1){
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString === "") {
    return "";
  } else {
    return myString.substr(1) + myString[0]
  }
}

function addUpTo(array, index) {
if (index === 0) {
    return array[index];
  } else {
    return array[index] + addUpTo(array, index - 1)
  }
}