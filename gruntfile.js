module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
        sass: {
            options: {
              sourceMap: true
            },
            dist: {
              files: {
                'css/style.css': 'css/style.scss'
              }
            }
          },
            jshint: {
              all: ['js/*.js']
            },
            watch: {
              scripts: {
                  files: ['scss/*.scss'],
                  tasks: ['scss'],
                  options: {
                      spawn: false,
                  }
              }
          }
      });
      // Load the plugins tasks
      grunt.loadNpmTasks('grunt-sass')
      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-watch');
      // Default task(s).
      grunt.registerTask('default', ['sass','jshint','watch']);
    };