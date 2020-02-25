var fs = require('fs');
var inquirer = require('inquirer');
var api = require('./utils/api');
var generateMarkdown = require('./utils/generateMarkdown');

// const makeMarkdown = new generateMarkdown();
// const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);

const questions = [


];

function promptUser() {
    return inquirer.prompt([
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
            name: 'description',
            message: 'Please write a description for your repository.'

        },
        {
            type: 'input',
            name: 'installation',
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
            type: 'input',
            name: 'contributing',
            message: 'How can users contribute to your work?'

        },
        {
            type: 'input',
            name: 'test',
            message: 'How can your application be tested? Please provide examples.'

        },
        {
            type: 'input',
            name: 'questions',
            message: 'How can a user get in contact with you if they have questions about your application?'
        }
    ])
        .then(function (data) {
            api.getUser(data.username);
            console.log(data.username);
            
            var fileName = 'README.md';
            writeToFile(fileName, data);
        })

}

    function writeToFile(fileName, data) {

        var fileName = 'README.md';

        fs.writeFile(fileName, generateMarkdown(data), function (err) {
            if (err) {
                return console.log(err);
            }
            else {
                // generateMarkdown(data);
                console.log(`Successfully created html file.`)
            }
        })
    }



// fs.writeFile(filename, data, function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     else {
//         console.log('Success!');
//     }
// })

// return writeFileAsync(fileName, markdown);

promptUser()


function init() {

}

init();
