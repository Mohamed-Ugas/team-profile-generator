// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// The Employee was not defined, because it wasn't imported. since Manager extends Employee, it needs to have acces to the Employee class.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Export the Manager class
module.exports = Manager;