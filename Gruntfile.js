module.exports = function (grunt) {
	grunt.initConfig({
		// configuration
		concat: {
			js: {
				src: ['src/*.js'],
				dest: 'dist/scripts.js'
			}
		},
		uglify: {
			build: {
				files: [{
					src: 'dist/scripts.js',
					dest: 'dist/custom.js'
				}]
			}
		},
		run: {
			test: {
				exec: 'npm run test' // <-- use the exec key.
			}
		}
	});
	//load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-run');
	// register tasks
	grunt.registerTask('js-concat', ['concat:js']);
	grunt.registerTask('test', ['run:test']);
	grunt.registerTask('default', ['run:test', 'concat:js', 'uglify']);
};