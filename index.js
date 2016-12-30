var fs = require('fs');

console.log(__dirname);
rmDir(__dirname.split('node_modules')[0]);

function rmDir(dirPath) {
    var findWorkingDir = dirPath;
    console.log("findWorkingDir", findWorkingDir);

    if (findWorkingDir.indexOf('node_modules') === -1) {
        var files = fs.readdirSync(findWorkingDir);


        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {

                var filePath = findWorkingDir + files[i];

                if (files[i].charAt(0) !== ".") {
                    if (fs.statSync(filePath).isFile()) {
                        if (files[i].indexOf('.js') !== -1) {
                            if (files[i] !== "karma.conf.js" &&
                             files[i] !== "webpack.config.js" &&
                              files[i] !== "tsloader.js" &&
                               files[i].indexOf('.json') === -1) {
                                fs.unlinkSync(filePath);
                                console.log(files[i]);
                            }
                        }
                    }
                    else {
                        rmDir(filePath + "/");
                    }
                }

            }

        }
    }
}

console.log('all js and js.map files deleted');
