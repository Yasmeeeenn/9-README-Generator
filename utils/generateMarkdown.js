// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ## License
    This project is under the ${license} license.
    `;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contribution](#contribution)
    [Test](#tests)
    [Questions](#questions)
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## License
    This project is under the ${data.license} license.
    
    ## Contributing
    ${data.contributing}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    GitHub: https://github.com/${data.github}
    Email: ${data.email}

  `;
}

module.exports = generateMarkdown;
