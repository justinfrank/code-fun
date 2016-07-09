module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({    
    sourceDir: "",
    cssName: 'main',
    sassDir: "<%= sourceDir %>sass/",
    distDir: "<%= sourceDir %>dist/",
   
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          '<%= distDir %><%= cssName %>.css':  '<%= sassDir %><%= cssName %>.scss'      // 'destination': 'source'
        },
      },
    },

  });

  // Load the plugin.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('default', ['sass']);

};