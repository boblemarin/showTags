module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    uglify: {
      options: {
        report: 'min',
        banner: 'javascript:'
      },
      showTags: {
        files: {
          'src/showTags.min.js': ['src/showTags.js']
        }
      }
    },
    watch: {
      showTags: {
        files: ['./src/showTags.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('default', ['uglify']);

};
