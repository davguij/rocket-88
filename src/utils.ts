import * as dot from 'dot';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as simplegit from 'simple-git/promise';

class Tools {
  private _git = simplegit();

  async checkoutRepo(repo: string, targetDir: string) {
    await this._git.clone(`https://github.com/davguij/${repo}`, targetDir);
    return;
  }
  async compileTemplate(filePath: string, data: any) {
    if (filePath.endsWith('.tpl') === false) {
      throw new Error(
        'The filePath argument only accepts files with a .tpl extension.'
      );
    }
    const templateFile = await fs.readFile(filePath, 'utf-8');
    const compiledFile = dot.template(templateFile)(data);
    await fs.writeFile(path.parse(filePath).name, compiledFile);
    await fs.remove(filePath);
    return;
  }
}

export const tools = new Tools();
