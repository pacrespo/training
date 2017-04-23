module.exports = function(grunt){

	// load plugins
	[
		'grunt-express-server',
		'grunt-mocha-test',
		'grunt-contrib-jshint',
		'grunt-exec',
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	// configure plugins
	grunt.initConfig({
		express: {
			options: {
			// Override defaults here
			},
			dev: {
				options: {
					script: 'meadowlark.js'
				}
			},
			prod: {
				options: {
					script: 'meadowlark.js',
					node_env: 'production'
				}
			},
			test: {
				options: {
					script: 'meadowlark.js'
				}
			}
		},
		mochaTest: {
			all: { 
				src: 'qa/tests-*.js',
				options: {
					ui: 'tdd',
					timeout: '5000',
					reporter: 'spec'
				},
			}
		},
		jshint: {
			app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
			qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
		},
		exec: {
			linkchecker: { cmd: 'linkchecker http://localhost:3000' }
		},
	});	

	// register tasks
	grunt.registerTask('default', ['express:dev','mochaTest','jshint','exec']);
};
