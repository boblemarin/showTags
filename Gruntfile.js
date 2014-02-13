module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    uglify: {
      showTags: {
        files: {
          'src/showTags.min.js': ['src/showTags.js']
        }
      }
    },
    watch: {
      showTags: {
        files: ['<%= src.files %>'],
        tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('default', ['uglify']);

};
