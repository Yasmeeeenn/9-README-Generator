// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the title of your README.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application.'
    },
    {
        type: 'input',
        name:'installation',
        message: 'Enter installation instruction.',
    },
    {
        type: 'input',
        name:'usage',
        message: 'Enter usage information.',
    },
    {
        type: 'input',
        name:'license',
        message: 'Chose a license.',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        name:'contribution',
        message: 'Enter contribution guidelines.',
    },
    {
        type: 'input',
        name:'test',
        message: 'Enter test instruction.',
    },
    {
        type: 'input',
        name:'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name:'email',
        message: 'Enter your email address.',
    }
    
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .createPromptModule(questions)
    .then((data) => {
        const readmeContent = generateReadme(data);
        writeToFile('README.md', readmeContent);
        console.log('README.md generated successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Function call to initialize app
init();
