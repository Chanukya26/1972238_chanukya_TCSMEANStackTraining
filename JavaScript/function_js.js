//Normal Function
function add(a,b)
{
     return a+b;
}
document.write("Normal Function <br/>")
document.write(add(100,200))
//expression style function
var sum =function addNumber(a,b)
{
    return a+b;
}
document.write("<br/>Expression style function<br/>")
document.write(sum(20,40));

var sum =function(a,b)
{
    return a+b;
}
document.write("<br/>Expression style function<br/>")
document.write(sumOfNumber(20,40));

//call back function
document.write("<br>Callback function<br/>");
function sayHello(fname,callback){
    document.write("<br/>welcome, you name is"+callback(fname));

}
var maleInfo=function(fname)
{
    return "Mr"+fname;
}
sayHello("Raj",maleInfo);
sayHello("Reeta",femaleInfo);

sayHello("Ajay",function(fname)
{
    return "Mr"+fname;
});

//Arrow function
