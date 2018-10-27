import { Command } from '@oclif/command';
export class GoodbyeCommand extends Command {
  async run() {
    this.log('goodbye, world!');
  }
}
