//ES5 style
function Employee() {
    this.fname = "Ajay Kumar";
    this.disEmpInfo = function () {
        console.log("Employee class function");
        console.log("name is" + this.fname);
    };
}
var emp1 = new Employee();
emp1.disEmpInfo();
//ES6-- java script as well as typescript
var person = /** @class */ (function () {
    function person() {
        this.fname = "Ajay Kumar";
    }
    person.prototype.disPersonInfo = function () {
        console.log("person class function");
        console.log("name is" + this.fname);
    };
    return person;
}());
var p1 = new person();
p1.disPersonInfo();
