//Array: collection of more than one element or values.
var obj1=[100,200,300,400,500]; // creating object using literal style
var obj2= new Array(100,200,300,400,500); // created using new keyword
document.write("<br/>")
document.write(obj1)
document.write("<br/>")
document.write(obj2)
document.write("<br/> using for loop <br/>")
for(var i=0;i<obj1.length;i++){
    document.write("<br/>"+obj1[i]);
}
document.write("display the value from array using callback with normal function style")
obj1.forEach(dis);
function dis(a){
    document.write("<br/>"+a)
}
document.write("<br/> display the value form array using anonymous function <br/>")
obj1.forEach(function(n){
    document.write("<br/>"+n)
})
document.write("<br/>display the value form array using arrow function <br/>")
obj1.forEach(v=>document.write("<br/>"+v));