let nodelib = require('nodelib');

let fileHelper = new nodelib.FileHelper();

async function PostCLI() {
    let argument = process.argv;
    let env;
    if (!(argument.length === 3)) {
        console.log('jspost <config file> <body file> <output file>');
        console.log('example config:');
        console.log('{');
        console.log('    "url":"https://jsonplaceholder.typicode.com/posts",');
        console.log('    "method": "post",');
        console.log('    "bodyType": "json",');
        console.log('    "headers": {');
        console.log('        "Content-type": "application/json; charset=UTF-8",');
        console.log('        "Authorization": "Basic Base64(\'username:password\')"');
        console.log('    }');
        console.log('}');
        console.log('<body file> is json file or xml file');
        console.log('Authorization is value from Base64 for \'username:password\'');
        return;
    }

    try {
        let fileName = argument[2];
        console.log(fileHelper.fileToString(fileName));
    } catch (err) {
        console.log(err);
    }

    process.exit();
}

PostCLI();