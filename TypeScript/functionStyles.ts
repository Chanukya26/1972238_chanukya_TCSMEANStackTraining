// 1st function passing parameter with different type of value
function empInfo(id:number,name:string,salary:number)
{
    console.log("id is "+id);
    console.log("id is "+name);
    console.log("id is "+salary);

}
empInfo(100,"Ravi",12000);
//function muste be return string value;
function sayHello(name:String) : string{
    return "welcome" +name;   
}
console.log(sayHello("ramesh"));
//pass parameter but no return type
function add(a:number,b:number):void
{
    let sum =a +b;
    console.log(sum);
}
//default parameter ? means optional parameter
// ? from right side and passing value from left side
function personDetails(id?:number,name?:string,age?:number){

}
personDetails(123,"Ravi",21);
personDetails(124,"Ragav");
personDetails(125);
personDetails();

