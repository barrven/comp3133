// Types, Classes and Objects
var Customer = (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
})();
// create instance of customer class and call method on object
var customer = new Customer();
customer.firstName = "Randy";
customer.lastName = "Savage";
customer.greeter();
