// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');








// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    
    console.log('✨Success!✨ Enjoy your README 🎉 ')
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponses) => {
        const markdownContent = generateMarkdown(userResponses);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
