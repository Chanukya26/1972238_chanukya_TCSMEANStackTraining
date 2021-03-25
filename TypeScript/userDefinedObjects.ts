//ES5 style
function Employee(){
    this.fname="Ajay Kumar";
this.disEmpInfo=function(){
    
    console.log("Employee class function");
    console.log("name is"+this.fname);
    }
}
let emp1= new Employee();
emp1.disEmpInfo();
//ES6-- java script as well as typescript
class person{
    fname:string="Ajay Kumar";
    disPersonInfo():void{
        console.log("person class function")
        console.log("name is"+this.fname);
       
        
    }
}
let p1 = new person();
p1.disPersonInfo();