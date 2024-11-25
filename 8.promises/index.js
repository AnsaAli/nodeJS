//define a function which return promise
function delayFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Function delayed for 2 s");
    }, 2000);
  });
}
console.log("start");

//using then we can resolve and reject
delayFun().then((res) => console.log("from delayeFu:", res));
console.log("end");



//write a function which is for resolve/reject
function division(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("divident cannot be zero");
    } else {
      resolve(num1 / num2);
    }
  });
}
division(20, 0)
  .then((res) => console.log("Answer is : ", res))
  .catch((err) => console.log("Throw an error: ", err));
