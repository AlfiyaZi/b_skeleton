/**
 * Created by 1 on 14.09.15.
 */
module.exports = function (grunt) {
// Grunt configuration
    grunt.initConfig({
        less: {
            app: {
                files: {"less/main.less": "css/main.css"}
            }
        }
    });
// Load plugins
    grunt.loadNpmTasks("grunt-contrib-less");
};
