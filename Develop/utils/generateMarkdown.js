function generateMarkdown(data) {
  return `
# ${data.title}
<img alt='licenseBadge' src='https://img.shields.io/badge/License-${data.license}-BLUE'>

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
<p>If you have questions about this application, I can be contacted at <strong>${data.email}</strong></p>
<p>
  <img src="${data.avatar_url}" alt="${data.name}" style='width: 200px; height: 200px;'>
</p>

`;
}

module.exports = generateMarkdown;
