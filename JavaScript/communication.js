/*document.write("<br/>1st message");
document.write("<br/>2nd message");
document.write("<br/>3rd message");
*/
/*
fun1();
fun2();
fun3();
*/
/*
1st request
2nd request
3rd request
*/
document.write("<br/>1st message");
setTimeout(function()
{
    document.getElementByID("msg").innerHTML="2nd Message";
},1000);
var i=0;
setInterval(function(){

    document.getElementByID("info").innerHTML=i++;

},1000);

document.write("<br/>3rd message");

