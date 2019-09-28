module.exports = function(grunt) {
    var minVendorFiles= [
        'libs/angular/angular.min.js',
        'libs/angular-spinners/dist/angular-spinners.min.js',
        'libs/file-saver.js/FileSaver.js',
        'libs/lodash/dist/lodash.min.js',
        'libs/moment/min/moment-with-locales.min.js'
    ];
    grunt.initConfig({
        webapp: grunt.file.readJSON('src/manifest.webapp'),
        compress: {
            main: {
                options: {
                    archive: 'dist/<%=webapp.name%>-<%=webapp.version%>.zip'
                },
                files: [
                    {expand:true, cwd: 'src', src: minVendorFiles.concat('*', 'img/**', 'css/**')} // includes files in src and its subdirs
                ]
            }
        },
        bumpup: {
            files: ['package.json', 'src/manifest.webapp']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.registerTask('default', ['compress']);
};