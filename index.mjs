import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './generateMarkdown.mjs';

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },

      {
        type: 'input',
        name: 'userstory',
        message: 'What is your user story?',

      },
   
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
      },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Successfully wrote to ${fileName}`);
        }
      });
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);

      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

init();