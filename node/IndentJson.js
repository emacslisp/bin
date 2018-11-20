let nodelib = require('nodelib');
let FileHelper = nodelib.FileHelper;

let fileHelper = new FileHelper();

//fileHelper.indentJson('/Users/di.wu/test/7.json');

let operation = {
    set: [
        {
            key: 'mongo',
            value: {
                "uri": "mongodb://localhost/vocus-one",
                "options": {
                  "useMongoClient": true
                }
            }
        },
        {
            key: 'logger.db',
            value: {
                "uri": "mongodb://localhost/v-logger",
            }
        },
        {
            key: 'vocusOneApi.url', 
            value: "http://localhost:3060"
        },
        {
            key: 'pricingEngine',
            value: {
                uri: "https://localhost:3051"
            }
        }
    ]
}
fileHelper.loadConfig('/Users/di.wu/dev/vocus-one3/config/development.json', operation);