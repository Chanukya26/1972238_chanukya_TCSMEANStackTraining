//IIFE: Immodiate Invoked function expression
function dis1()
{
    document.write("normal Function<br/>")
}
dis1();
dis1();
//call function from same script
//call function from another script
//call function from html using events


//IIFE: Immediate Invoked function expression using anonymous function style
(function(){
    document.write("<br/>this is IIFE function<br/>")
})();
//IIFE: Immediate Invoked function expression using arrow function style
(()=>document.write("<br/>this is type of IIFE fucntion using Arrow"))();

((a,b)=>document.write(a+b))(10,20);
