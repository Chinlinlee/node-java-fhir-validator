const java = require('java-bridge');
const glob = require("glob");
const path = require("path");

java.ensureJvm();

let jarFiles = glob.sync("**/*.jar", {
    cwd: path.join(__dirname, "./java-pkgs"),
    absolute: true
});

java.appendClasspath(jarFiles);

module.exports.java = java;
module.exports.JString = java.importClass('java.lang.String');
module.exports.JArrays = java.importClass('java.util.Arrays');