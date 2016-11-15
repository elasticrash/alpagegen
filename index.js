var program = require('commander');

program
    .arguments('<file>')
    .option('-u, --type <type>', 'The type of file')
    .action(function (file) {
        console.log('user: %s pass: %s file: %s',
            program.type, file);
    })
    .parse(process.argv);