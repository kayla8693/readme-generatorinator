function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
1. Installation
2. Usage
3. License
4. Contributing
5. Tests
6. Questions

## Installation
${data.installation}

## Usage
${data.useage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
