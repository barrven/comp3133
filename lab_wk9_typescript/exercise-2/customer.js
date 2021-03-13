var Customer = (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
})();
var customer = new Customer();
customer.firstName = 'Barrington';
customer.lastName = 'Venables';
customer.greeter();
