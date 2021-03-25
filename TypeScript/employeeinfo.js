var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 100;
        this.name = "Ravi Kumar";
        this.salary = 12000;
    }
    Employee.prototype.empinfo = function () {
        console.log("id is" + this.id);
        console.log("name is" + this.name);
        console.log("salary is" + this.salary);
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.empinfo();
