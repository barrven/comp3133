// Access Modifiers and Constructors
class Employee {
  private firstName: string;
  private lastName: string;

  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
  }

  public greeter() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}
// create instance of customer class and call method on object
let employee = new Employee("Bret", "Hart");
employee.greeter();
