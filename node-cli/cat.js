let nodelib = require('nodelib');

let fileHelper = new nodelib.FileHelper();

async function catCLI() {
    let argument = process.argv;
    let env;
    if (!(argument.length === 3)) {
      console.log('jscat <file>');
      return;
    }

    try {
        let fileName = argument[2];
        console.log(fileHelper.fileToString(fileName));
    } catch(err) {
        console.log(err);
    }

    process.exit();
}

catCLI();