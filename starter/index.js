const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// this is going to import the generateTeam function from the page-pageTemplate.js
const generateTeam = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Use Inquirer to prompt the user for the team manager's information (name, ID, email, and office number)
inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Enter the manager's name:",
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter the manager's employee ID:",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter the manager's email address:",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter the manager's office number:",
    },
  ])
  .then((managerData) => {
    // Create a Manager object using the provided data
    const manager = new Manager(
      managerData.managerName,
      managerData.managerId,
      managerData.managerEmail,
      managerData.managerOfficeNumber
    );

    // Continue to the next steps (add engineer, add intern, or finish)
  });


//   After gathering the manager's information, present a menu to the user with options to add an engineer, add an intern, or finish building the team.
  function mainMenu() {
    inquirer.prompt([
        {
          type: "list",
          name: "menuChoice",
          message: "What would you like to do?",
          choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
        },
      ])
      .then((menuData) => {
        // Depending on the user's choice, call the respective function
        if (menuData.menuChoice === "Add Engineer") {
          // Call a function to add an engineer
        } else if (menuData.menuChoice === "Add Intern") {
          // Call a function to add an intern
        } else {
          // Finish building the team and generate the HTML
          const team = []; // Store your team members here
          const html = render(team);
          fs.writeFileSync(outputPath, html);
          console.log("Team HTML generated successfully!");
        }
      });

      function addEngineer() {
        inquirer
          .prompt([
            // Prompt to collect engineer's information
          ])
          .then((engineerData) => {
            // Create an Engineer object and push it to the team array
          });
      }
      
      function addIntern() {
        inquirer
          .prompt([
            // Prompt to collect intern's information
          ])
          .then((internData) => {
            // Create an Intern object and push it to the team array
          });
      }
     
      // Call the generateTeam function and pass in the 'team' array
        const html = generateTeam(team);

        // Write the HTML to a file
        fs.writeFileSync(outputPath, html);
        console.log("Team HTML generated successfully!");

  }
  
  // Start by calling the main menu
  mainMenu();
  
  // Write the generated HTML to a file (STEP 5)
  fs.writeFile(outputPath, html, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('team.html has been successfully written to the output folder.');
  })