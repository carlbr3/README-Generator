// TODO: Include packages needed for this application

import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for your project:',
        choices: ['Apache 2.0', 'MIT', "Boost"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, callback) {
    fs.writeFile(fileName, data, callback);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error('Error writing to README.md:', err);
            } else {
                console.log('README.md generated successfully!');
            }
        });
    });
}
// Function call to initialize app
init();
