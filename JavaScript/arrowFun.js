var sayHelloo=function(name)
{
    return "welcome"+name;
}
document.write("<br/> Expression style");
document.write(sayHello("ravi"));

//arrow function is known as anonymous function
//arrow function by default return the value
//1st point if we want to write code very less and not repeating same logic again and again
document.write("<br/> Using Arrow function<br/>")
var sayHi =(name)=>"welcome"+name;
document.write(sayHi("ravi"))
document.write(<br/>)
var addNumber1=(a,b)=>a+b;
var findLargest=(a,b)=>{
    if(a>b)
    {
        return a;

    }else{
        return b;
    }
}
document.write("addition of")