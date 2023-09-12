// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// The Employee was not defined, because it wasn't imported. since Manager extends Employee, it needs to have acces to the Employee class.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

// Export the Engineer class
module.exports = Engineer;

