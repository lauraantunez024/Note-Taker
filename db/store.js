const fs = require('fs');
const util = require('util')
const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
    getNotes() {
        return readFileAsync('db/db.json', 'utf8').then((notes) => {
            return json.parse(notes);
             

            

        })

    }

    addNote(note) {
        const {title, text} = note;

        if (!title || !text) {
            throw new Error('You must have both a title and text.')
        }

        const newNote = {title, text, id: uuidv1()} 
        
        console.log(this.getNotes());

    }
}


module.exports = new Store();