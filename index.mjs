import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './generateMarkdown.mjs';

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project/app?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your app:',
      },

      {
        type: 'input',
        name: 'userstory',
        message: 'What is your user story?',

      },

      {
        type: 'input',
        name: 'guide',
        message: 'Walk your users through the steps of using your app:',
      },

      {
        type: 'input',
        name: 'install',
        message: 'How do you install your app?',
      },

      {
        type: 'input',
        name: 'report',
        message: 'How do you report issues with this app?',
      },

      {
        type: 'input',
        name: 'contributions',
        message: 'How are other developers able to contribute to the success of this project?'
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