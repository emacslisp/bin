let nodelib = require('nodelib');

let fileHelper = new nodelib.FileHelper();
let JWTService = new nodelib.JWTService();

async function jwtCLI() {
    let argument = process.argv;
    let env;
    if (!(argument.length === 3)) {
      console.log('jwt <file>');
      return;
    }

    try {
        let fileName = argument[2];
        let tokenString = fileHelper.fileToString(fileName);
        let result = await JWTService.verifyTokenIgnoreDate(tokenString);
        console.log(JSON.stringify(result, null, 4));
    } catch(err) {
        console.log(err);
    }

    process.exit();
}

jwtCLI();