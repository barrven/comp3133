// Types, Classes and Objects
class Customer {
  firstName: string;
  lastName: string;

  public greeter() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}

// create instance of customer class and call method on object
let customer = new Customer();
customer.firstName = "Randy";
customer.lastName = "Savage";
customer.greeter();
