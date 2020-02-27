// var api = require('./api');
// var userPrompt = require('../index');

function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
<p id='installation'>${data.installation}</p>

## Usage
<p id='usage'>${data.useage}</p>

## License
<p id='license'>${data.license}</p>

## Contributing
<p id='contributing'>${data.contributing}</p>

## Tests
<p id='tests'>${data.test}</p>

## Questions
<p id='questions'>${data.questions}</p>
<p>Email: ${data.email}</p>
<p>
  <img src="${data.avatar_url}" alt="${data.name}" style='width: 200px; height: 200px;'>
</p>

`;
}

module.exports = generateMarkdown;
