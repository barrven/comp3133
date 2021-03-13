var Customer = (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
})();
var customer = new Customer('Barrington', 'Venables');
customer.greeter();