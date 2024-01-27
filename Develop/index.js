// Included packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');




// Array of questions for user input for the README file
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the unique title of your project?',
    },

    {
        type: 'input',
        name: 'what',
        message: 'What does your application do?',
    },

    {
        type: 'input',
        name: 'why',
        message: 'How did you determine the technologies to use, and what influenced your decision? (Tip: The answer is not because it was a homework assignment you bozo)',
    },

    {
        type: 'input',
        name: 'issues',
        message: 'What are some of the challenges you faced if any?',
    },

    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn from this project?',
    },


    {
        type: 'input',
        name: 'install',
        message: 'How can a user install this application?',
    },
    

    {
        type: 'checkbox',
        name: 'techstack',
        message: 'Please select the tech stack you used for this application',
        choices: ['HTML', 'JavaScript', 'CSS', 'JSON', 'TailwindCSS', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Python', 'Django', 'Jest', 'Angular', 'Bootstrap']
    },

    {
        type: 'input',
        name: 'install',
        message: 'How can a user install this application?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide step-by-step instructions on how the user can use this application. Include key commands and important considerations',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Select the license most appropriate for this application',
        choices: ['MIT', 'GPL', 'Apache 2.0', 'Mozilla',]
    },

    {
        type: 'input',
        name: 'features',
        message: 'What are potential features for this application? , Include possible functionality that you would like to add (NOTE: use commas between features to format a list)',
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'How can the community contribute to this application? (Tip: You may want to mention forking)',
    },

    {
        type: 'input',
        name: 'test',
        message: 'Are there any tests users need to run for this application? (Tip: type N/A if no)',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username (Tip: just the username not the entire url)',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
      
    {
        type: 'input',
        name: 'acknowledgement',
        message: 'Include any acknowledgements, credits or any third-party contributers or external code sources ',
    },
      
];



// Function to write generated README file, and logs success message.
function writeToFile(fileName, data) {

    // fs writefilesync method to write the data to the readme file
    fs.writeFileSync(fileName, data);

    // Logs success message 
    console.log('✨Success!✨ Enjoy your README 🎉 ')
}



// Function to promot the user questions and organizes the README content and calls writeToFile function to generate file
function init() {

    // Use the inquirer prompt method to interactively get user input
    inquirer.prompt(questions).then((userResponses) => {

        // Generate the markdown README content using the user Inputs
        const markdownContent = generateMarkdown(userResponses);

        // Calls the writeToFile function to print the README file
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
