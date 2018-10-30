//@ts-check

var fs = require('fs');

const newFileName = process.argv[2] || 'new';

const newFileContents = `
function ${newFileName}() {
    console.log("It lives!");
}
${newFileName}();
`

const sharedTsAppendedConfigObject = `
    {
        name: '${newFileName} display name',
        description: 'The HTML title / tool tip of for you file, runs ${newFileName} on click.',
        module: '${newFileName}',
        icon: 'random'
    },
    // extend here - do not delete this line
`;

const stringToReplace = /\/\/ extend here - do not delete this line/g;

const scriptPath = `./scripts/${newFileName}.ts`;
const sharedPath = './scripts/shared.ts';

fs.writeFile(scriptPath, newFileContents, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log(`
    *****************************************************************
    ******** File created: ${scriptPath} *******
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