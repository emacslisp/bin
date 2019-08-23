let nodelib = require('nodelib');

let fileHelper = new nodelib.FileHelper();

async function jsonCLI() {
    let argument = process.argv;
    let env;
    if (!(argument.length === 3)) {
      console.log('jsjson <file>');
      return;
    }

    try {
        let fileName = argument[2];
        fileHelper.indentJson(fileName)
    } catch(err) {
        console.log(err);
    }
}

jsonCLI();