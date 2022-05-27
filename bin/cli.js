#! /usr/bin/env node

// import shell from "../index.js";
import shell from "shelljs";


if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);

const projectName = args[0];


if (projectName.length > 0) {

  // Clone the repo
  if (shell.exec(`git clone https://github.com/officialrajdeepsingh/create-tailwind-app.git ${projectName}`).code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }

  // Change the folder
  if (shell.cd(projectName).code !== 0) {
    shell.echo('Directer is not change');
    shell.exit(1);
  }
  shell.echo('Start download working...');

  // Install the dependencies
  if (shell.exec('npm install').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }

}

shell.echo(`cd ${projectName}`);
shell.echo('npm run dev');
shell.echo('Let start the working with tailwind and postcss.');