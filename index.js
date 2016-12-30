var program = require('commander');

program
    .action(function (file) {
        var dirPath = __dirname;
        rmDir(dirPath);
        rmDir = function (dirPath) {
            var files = fs.readdirSync(dirPath);

            if (files.length > 0)
                for (var i = 0; i < files.length; i++) {
                    if (files[i].indexOf('.js') !== 0) {
                        var filePath = dirPath + '/' + files[i];
                        if (fs.statSync(filePath).isFile()) {
                            fs.unlinkSync(filePath);
                        }
                        else {
                            rmDir(filePath);
                        }
                    }
                }
            fs.rmdirSync(dirPath);
        };

        console.log('all js files deleted');
    })
    .parse(process.argv);