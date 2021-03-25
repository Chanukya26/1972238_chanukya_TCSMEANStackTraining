class Employee{
    id:number=100;
    name:string="Ravi Kumar";
    salary:number=12000;
    empinfo():void{
        console.log("id is"+this.id);
        console.log("name is"+this.name);
        console.log("salary is"+this.salary);
    }
}
let emp1 = new Employee();
emp1.empinfo();