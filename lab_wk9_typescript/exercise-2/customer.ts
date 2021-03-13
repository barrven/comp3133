class Customer {
    firstName: string;
    lastName: string;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer();
customer.firstName = 'Barrington';
customer.lastName = 'Venables';
customer.greeter();