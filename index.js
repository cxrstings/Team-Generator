const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const employeesArray = [];

function managerPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the employee ID of the manager?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email of the manager?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the office number of the manager?'
        },
    ]).then(function (data) {
        const managerData = new Manager(
            data.managerName,
            data.managerID,
            data.managerEmail,
            data.managerOffice
        );
        employeesArray.push(managerData);
        employeeMenu();
    });
};

function employeeMenu() {
    console.log(employeesArray);
    inquirer.prompt([
    {
        type: 'checkbox',
        name: 'addEmployee',
        message: 'What role is the next employee you would like to add?',
        choices: ['Engineer','Intern','I would not like to add any more employees.']
    },
    ]).then(function (data) {
        if (data.addEmployee[0] == "Engineer") {
            engineerPrompt();
        } else if (data.addEmployee[0] == "Intern") {
            internPrompt();
        } else if (data.addEmployee[0] == "I would not like to add any more employees.") {
            createHTML();
        }
    });
};

function engineerPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of this engineer?'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the ID of this engineer?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email of this engineer?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the GitHub username of this engineer?'
        },
    ]).then(function (data) {
        const engineerData = new Engineer(
            data.engineerName,
            data.engineerID,
            data.engineerEmail,
            data.engineerGithub
        );
        employeesArray.push(engineerData);
        employeeMenu();
        });
};

function internPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of this intern?'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the ID of this intern?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the email of this intern?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does this intern attend?'
        },
    ]).then(function (data) {
        const internData = new Intern(
            data.internName,
            data.internID,
            data.internEmail,
            data.internSchool
        );
        employeesArray.push(internData);
        employeeMenu();
        });
};

function createHTML() {
    let managerHTML = "";
    let engineerHTML = "";
    let internHTML = "";
  
    for (let i = 0; i < employeesArray.length; i++) {
      const employee = employeesArray[i];
      if (employee.getRole() === "Manager") {
        // Add the manager's data to the managerHTML variable
        managerHTML += `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${employee.getName()}</h5>
              <p class="card-text">${employee.getRole()}</p>
              <p class="card-text">ID: ${employee.getId()}</p>
              <p class="card-text">Email: ${employee.getEmail()}</p>
              <p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>
            </div>
          </div>
        `;
      } else if (employee.getRole() === "Engineer") {
        // Add the engineer's data to the engineerHTML variable
        engineerHTML += `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${employee.getName()}</h5>
              <p class="card-text">${employee.getRole()}</p>
              <p class="card-text">ID: ${employee.getId()}</p>
              <p class="card-text">Email: ${employee.getEmail()}</p>
              <p class="card-text">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></p>
            </div>
          </div>
        `;
      } else if (employee.getRole() === "Intern") {
        // Add the intern's data to the internHTML variable
        internHTML += `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${employee.getName()}</h5>
              <p class="card-text">${employee.getRole()}</p>
              <p class="card-text">ID: ${employee.getId()}</p>
              <p class="card-text">Email: ${employee.getEmail()}</p>
              <p class="card-text">School: ${employee.getSchool()}</p>
            </div>
          </div>
        `;
      }
    }
  
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
          <link rel="stylesheet" href="./style.css">
      </head>
      <body>
          <header>
              <h1>My Team</h1>
          </header>
          <main>
              <section class="manager">
                  <h2>Manager</h2>
                  <div class="card-deck">
                      ${managerHTML}
                  </div>
              </section>
              <section class="engineers">
                  <h2>Engineers</h2>
                  <div class="card-deck">
                      ${engineerHTML}
                  </div>
              </section>
              <section class="interns">
                  <h2>Interns</h2>
                  <div class="card-deck">
                      ${internHTML}
                  </div>
              </section>
          </main>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </body>
      </html>
      `;
      fsGenerate(html);
}

function fsGenerate(html) {
    fs.writeFile('./dist/newteam.html', html, (err) =>
      err ? console.error(err) : console.log('HTML file generated successfully!')
    );
  }

managerPrompt();