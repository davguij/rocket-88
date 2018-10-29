import { Command } from '@oclif/command';
import chalk from 'chalk';
import cli from 'cli-ux';
import * as fs from 'fs-extra';
import * as inquirer from 'inquirer';
import * as path from 'path';
import { tools } from '../utils';
const util = require('util');
const exec = util.promisify(require('child_process').exec);

interface Options {
  projectName: string;
}

export class Create extends Command {
  async run() {
    const selectedOptions = await inquirer.prompt<Options>([
      {
        name: 'projectName',
        message: 'Please specify your project name.',
        type: 'input',
        validate: input =>
          input.length > 0 ? true : 'The project name cannot be empty',
      },
    ]);
    const startingDir = process.cwd();
    const targetDir = path.resolve(startingDir, selectedOptions.projectName);
    try {
      cli.action.start('Fetching template');
      await tools.checkoutRepo('rocket-88-templates-basic', targetDir);
      cli.action.stop();
      cli.action.start('Interpolating template');
      process.chdir(targetDir);
      await fs.remove(path.resolve(process.cwd(), '.git'));
      await tools.compileTemplate('./package.json.tpl', selectedOptions);
      cli.action.stop();
      cli.action.start('Installing npm dependencies');
      await exec('npm -s install');
      cli.action.stop();
      this.log('------');
      this.log(
        chalk.green(
          chalk.green.inverse('Congrats!'),
          'Your new project is ready.'
        )
      );
      this.log(chalk.underline('Run the following commands to get started:'));
      this.log(`1. cd ${selectedOptions.projectName}`);
      this.log('2. npm run dev');
    } catch (e) {
      this.error(e);
    }
  }
}
