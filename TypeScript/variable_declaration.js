var a = 10;
var a = 20; // re declaration
console.log(a);
console.log(a);
var b = 30;
//let b=40; // re-declaration not possible
for (var i = 0; i < 100; i++) {
}
console.log(i);
for (var j = 0; j < 100; j++) {
}
//console.log(j); // we cant access j variable
var c = 100; // to declare a constant value
//c=200; // we cant assaign another value
