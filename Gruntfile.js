module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            test: {
                port: 8000
            }
        },
        jasmine: {
            test: {
                src: 'assets/**/*.js',
                options: {
                    specs: 'spec/*spec.js',
                    host: 'http://127.0.0.1:8000/',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: './assets/require-config.js'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
