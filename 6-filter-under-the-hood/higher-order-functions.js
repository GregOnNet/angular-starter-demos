
function addiere(a) {

  return function addiereB(b) {
    return a + b;
  }
}

var addiere10 = addiere(10);

console.log(addiere10(5));
console.log(addiere10(10));


console.log(addiere10(
             addiere10(
              addiere10(60))));
