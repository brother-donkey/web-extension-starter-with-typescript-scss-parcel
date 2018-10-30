//@ts-check

var fs = require('fs');

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });  

const newFileContents = `
function yourAwesomeNewFunction() {
    console.log("It lives!");
}
yourAwesomeNewFunction();
`

const sharedTsAppendedConfigObject = `
    {
        name: 'Display name of your button',
        description: 'The HTML title / tool tip of for you file',
        module: 'new',
        icon: 'random'
    },
    // extend here - do not delete this line
`;

const stringToReplace = /\/\/ extend here - do not delete this line/g;

const scriptPath = './scripts/new.ts';
const sharedPath = './scripts/shared.ts';

fs.writeFile(scriptPath, newFileContents, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log(`
    *****************************************************************
    ******** File created: check ${scriptPath} *******
    *****************************************************************
    `);
});

fs.readFile(sharedPath, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(stringToReplace, sharedTsAppendedConfigObject.trim());

    fs.writeFile(sharedPath, result, 'utf8', function (err) {
        if (err) throw err;
    });
});