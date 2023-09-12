// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


// The Employee was not defined, because it wasn't imported. since Manager extends Employee, it needs to have acces to the Employee class.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

// Export the Intern class
module.exports = Intern;
