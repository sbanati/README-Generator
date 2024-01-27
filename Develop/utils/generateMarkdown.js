//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string. Used switch statement to handle if else block
function renderLicenseBadge(license) {
 
  let url = ``
  switch(license){
    
    case 'MIT':
      url = `![licenseShield](https://img.shields.io/badge/license-MIT-yellow)`
    break;
    
    case 'GPL':
      url = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    break;

    case 'Apache 2.0':
      url = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    break;

    case 'Mozilla':
      url = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    break;

    // Incase the license is not recognized 
    default:
      url = '';

    
  }
  
  return url;
}



// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let url = '';
  
  switch (license) {
    
    case 'MIT':
      url = 'https://opensource.org/licenses/MIT';
    break;

    case 'GPL':
      url = 'https://www.gnu.org/licenses/gpl-3.0';
    break;

    case 'Apache 2.0':
      url = 'https://opensource.org/licenses/Apache-2.0';
    break;

    case 'Mozilla':
      url = 'https://opensource.org/licenses/MPL-2.0';
    break;

    //Incase the License is not recognized 
    default:
    url = '';
  
  }
  return url;

}


// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license === 'None'){
    return ``;
  }
  return `## License 
  This project is covered under the [${license} License](${renderLicenseLink(license)}).`

}

function renderLicenseToC(license) {
  
  if(license === 'None'){
    return ``;
  }
  return `* [License](#license)`
}



//Create a function to generate markdown for README
function generateMarkdown(data) {

  // Splits feature string into an array, uses map method to trim white spaces, add a bullet point to each entry, and then joins them into a new line.
  const features = data.features.split(',').map(item => `* ${item.trim()}`).join('\n');

   // Same thing as features, to show it as a list, but I used the join method since techstack is an array of choices to a string separated by commas.
  const stack = data.techstack.map(item => `* ${item.trim()}`).join('\n');

  // Splits feature string into an array, uses map method to trim white spaces, add a bullet point to each entry, and then joins them into a new line.
  const acknowledgement = data.acknowledgement.split(',').map(item => `* ${item.trim()}`).join('\n');
  

  // README content construction 
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  * [Description](#description)
  * [Built with](#built-with)
  * [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Additions](#additions)
  * [Contributions](#contributions)
  * [Acknowledgements](#acknowledgements)
   ${renderLicenseToC(data.license)}
  * [Contact](#contact)

## Description
  
  ${data.what}
  ${data.why}
  ${data.issues}
  ${data.learn}

### Built with
  
  ${stack} \n

## Getting Started

## Installation

  ${data.install}

## Usage

  ${data.screenshot}
  ${data.usage}

## Additions

  ${features}

## Contributions

  This part of the readme is where community involvement can happen!\n
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

  ${data.contributions}

## Acknowledgements

  ${acknowledgement}

## License
  ${data.License}

## Contact 
  
  Don't hesitate to reach out! 

  My Github URL: https://github.com/${data.github}
  
  My Email: [${data.email}](mailto:${data.email})`

};




module.exports = generateMarkdown;
