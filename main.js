/******************
 * YOUR CODE HERE *
 ******************/

const call = function(func1){
  func1();
}
const callTwice = function(func1){
  func1();
  func1();
};

const callXTimes = function(func1, num){
  for (let counter = 0; counter < num; counter++){
    func1();
  }
};
const returnFromFunc = function(func1){
  return func1();
};

const modifyString = function(str,func1){
  return func1(str);
};

const modifyNumber = function(num, func1){
  return func1(num);
};

const modifyAnything = function(x,func1){
  return func1(x);
};

const twoFuncs = function(func1,func2){
  return func2(func1());
};

const threeFuncs = function(func1,func2,func3){
 return func3(func2(func1())) ;
};

const twoValues = function(x,y,func1){
  return func1(x,y);
};

const twoValuesRTL = function (x,y,func1){
  return func1(y,x);
};
/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof call === 'undefined') {
  call = undefined;
}

if (typeof callTwice === 'undefined') {
  callTwice = undefined;
}

if (typeof callXTimes === 'undefined') {
  callXTimes = undefined;
}

if (typeof returnFromFunc === 'undefined') {
  returnFromFunc = undefined;
}

if (typeof modifyString === 'undefined') {
  modifyString = undefined;
}

if (typeof modifyNumber === 'undefined') {
  modifyNumber = undefined;
}

if (typeof modifyAnything === 'undefined') {
  modifyAnything = undefined;
}

if (typeof twoFuncs === 'undefined') {
  twoFuncs = undefined;
}

if (typeof threeFuncs === 'undefined') {
  threeFuncs = undefined;
}

if (typeof twoValues === 'undefined') {
  twoValues = undefined;
}

if (typeof twoValuesRTL === 'undefined') {
  twoValuesRTL = undefined;
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  threeFuncs,
  twoValues,
  twoValuesRTL,
}
