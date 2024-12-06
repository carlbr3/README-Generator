// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'MIT':
      return '![License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Boost':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    default:
      return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)'
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)'
    case 'Boost':
      return '(https://www.boost.org/LICENSE_1_0.txt)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  [License]${renderLicenseLink(license)}
  > ***NOTE***
  > "This application is distributed under the ${license}, which means users are free to modify, distribute, and use the software for commercial purposes, as long as they include the original copyright notice and license terms in any derived works."`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `
# ${data.title}

${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[License](#license)
  -[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please contact me using the information below: 
  - GitHub: https://github.com/${data.github}
  - Email: [${data.email}](mailto:${data.email})
`;
}
export default generateMarkdown;
