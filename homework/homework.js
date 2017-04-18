var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  if (n==0 || n==1){
    return n;
  }
  else{
    return homework.fibonacci(n-1)+homework.fibonacci(n-2);
  }

};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  var length;
  if (array) {
    length=array.length;
  }
  else {
    return null;
  }

  var sorted = [];
  for (var outer = 0; outer < length; outer++) {
    smallestIndex=0;
    for (var i = 0; i < length; i++) {
      if(array[i]<array[smallestIndex]){
        smallestIndex=i;
      }
    }
    sorted[outer]=array[smallestIndex];
    array[smallestIndex]= Number.MAX_SAFE_INTEGER;
  }
  return sorted;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  if (n>=1) {
    return n*homework.factorial(n-1);
  }
  else if (n==0) {
    return 1;
  }
  else {
    return null;
  }
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  var length;
  if (array){
    length = array.length;
  }
  else {
    return null;
  }
  numMoves=n%length;

  var rotatedArray=[];
  for (var i = 0; i < length; i++) {
    var newIndex=i-numMoves;
    if (newIndex<0){
      newIndex+=length;
    }
    rotatedArray[newIndex]=array[i];
  }
  return rotatedArray;
};

/*
  5. Balanced Brackets

  A bracket is any one of the following: (, ), {, }, [, or ]

  The following are balanced brackets:
    ()
    ()()
    (())
    ({[]})

  The following are NOT balanced brackets:
  (
  )
  (()
  ([)]

  Return true if balanced
  Return false if not balanced
*/
homework.balancedBrackets = function(bracketsString){
  var stack=[];
  for (var i = 0; i < bracketsString.length; i++) {
    var ch = bracketsString[i];
    if (ch=='['||ch=='{'||ch=='('){
      stack.push(ch);
    }
    else if (stack.length>0) {
      var top=stack[stack.length-1];
      if (top=='[' && ch==']' || top=='(' && ch==')' || top=='{' && ch=='}') {
        stack.pop();
      }
    }
    else{
      return false;
    }
  }
  return stack.length==0;
};
