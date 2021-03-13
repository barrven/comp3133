var Customer = (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    Customer.prototype.getAge = function () {
        console.log(this.age);
    };
    return Customer;
})();
exports.Customer = Customer;
