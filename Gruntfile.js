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
                    // host: 'http://127.0.0.1:8000/',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: './assets/require-config.js'
                    }
                }
            },
            coverage: {
                src: 'assets/**/*.js',
                options: {
                    specs: 'spec/*spec.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: 'coverage',
                        thresholds: {
                            lines: 75,
                            statements: 75,
                            branches: 75,
                            functions: 90
                        },
                        // 1. don't replace src for the mixed-in template with instrumented sources
                        replace: false,
                        template: require('grunt-template-jasmine-requirejs'),
                        templateOptions: {
                            requireConfig: {
                                requireConfigFile: './assets/require-config.js'
                            }
                        }
                    }
                }
            }
        }
            
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
