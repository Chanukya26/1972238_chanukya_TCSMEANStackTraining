var num1 = [100, 200, 300, 400, 500];
var num2 = new Array();
console.log("size" + num1.length);
console.log("size" + num2.length);
num1.push(600);
num1.push(700);
num1.push(800);
num2.push(55);
num2.push(65);
num2.push(75);
num2.push(85);
console.log("size" + num1.length);
console.log("size" + num2.length);
num1.pop(); // to remove last element
num2.pop();
console.log("size" + num1.length);
console.log("size" + num2.length);
console.log(num1);
console.log(num2);
num1.shift(); // remove first element
num2.shift();
console.log(num1);
console.log(num2);
