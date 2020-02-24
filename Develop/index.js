var fs = require('fs');
var inquirer = require('inquirer');
var api = require('./utils/api');
var generate = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

const url = `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

const questions = [

];

function promptUser() {
    return ([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'

        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repository?'

        },
        {
            type: 'input',
            name: 'Please write a description for your repository.',
            message: 'description'

        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project? Please provide a step-by-step guide.'

        },
        {
            type: 'input',
            name: 'useage',
            message: 'Please provide instructions and examples on how to use your application.'

        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project.',
            choices: [
                'MIT License',
                'GNU GPLv3',
                'GNU AGPLv3',
                'GNU LGPLv3',
                'Mozilla Public License 2.0',
                'Apache License 2.0',
                'Boost Softward License 1.0',
                'The Unlicense'
            ]

        },
        {
            type: '',
            name: '',
            message: ''

        },
        {
            type: '',
            name: '',
            message: ''

        }
    ])
}

function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);

    return writeFileAsync(fileName, markdown);
}

function init() {

}

init();
