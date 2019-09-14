let nodelib = require('nodelib');

let fileHelper = new nodelib.FileHelper();

let xmlHelper = new nodelib.XMLHelper();

async function xmlCLI() {
    let argument = process.argv;
    let env;
    if (!(argument.length === 3)) {
      console.log('jsxml <file>');
      return;
    }

    try {
        let fileName = argument[2];
        let fileContent = fileHelper.fileToString(fileName);
        let xml = xmlHelper.indentXML(fileContent);
        fileHelper.stringToFile(fileName, xml);
        console.log(xml);
    } catch(err) {
        console.log(err);
    }
}

xmlCLI();