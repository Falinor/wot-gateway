import fs from 'fs';
import path from 'path';

const PATH = path.join(__dirname, 'pi.json');

class Pi {

  constructor(path = PATH) {
    try {
      const data = fs.readFileSync(path, 'utf8');
      this._model = JSON.parse(data);
    } catch (e) {
      console.log(`Error while parsing ${path}`);
    }
  }

  async actions() {
    return this._model.links.actions;
  }

  async properties() {
    return this._model.links.properties;
  }

  async model() {
    return this._model;
  }

}

const pi = new Pi();
export default pi;
