var Browser = require('zombie');

var browser;

suite('Cross-Page Tests', function(){

	setup(function(){
		browser = new Browser();
	});

	test('requesting a group rate quote from the hood river tour page should ' +
			'populate the hidden referrer field correctly', function(done){
		var referrer = 'http://localhost:3000/tours/hood-river';
		browser.visit(referrer, function(){
			browser.clickLink('.requestGroupRate', function(){
				var hidden = browser.field('referrer').value;
				browser.assert.success();
				browser.assert.input('form input[name=referrer]', referrer);
				done();
			});
		});
	});

	test('requesting a group rate from the oregon coast tour page should ' +
			'populate the hidden referrer field correctly', function(done){
		var referrer = 'http://localhost:3000/tours/oregon-coast';
		browser.visit(referrer, function(){
			browser.clickLink('.requestGroupRate', function(){
				var hidden = browser.field('referrer').value;
				browser.assert.success();
				browser.assert.input('form input[name=referrer]', referrer);
				done();
			});
		});
	});

	test('visiting the "request group rate" page dirctly should result ' +
			'in an empty value for the referrer field', function(done){
		browser.visit('http://localhost:3000/tours/request-group-rate', function(){
			browser.assert.input('form input[name=referrer]', '');
			done();
		});
	});

});
