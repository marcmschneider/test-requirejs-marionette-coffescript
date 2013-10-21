requirejs.config({
	
	urlArgs: 'bust=' + (new Date()).getTime(),
	
	paths: {
		// requirejs plugins and its depencencies
		'cs': '../components/require-cs/cs',
		'hbs': '../components/require-handlebars-plugin/hbs',

		// other dependencies
		'coffee-script': '../components/require-cs/coffee-script',
		'i18nprecompile': '../components/require-handlebars-plugin/hbs/i18nprecompile',
		'handlebars': '../components/handlebars/handlebars',
		'json2': '../components/json2/json2',
		
		// core libraries and its depencencies
		'jquery': '../components/jquery/jquery',
		'underscore': '../components/underscore/underscore',
		'backbone': '../components/backbone/backbone',
		'marionette': '../components/marionette/lib/core/amd/backbone.marionette',
		'backbone.wreqr': '../components/backbone.wreqr/lib/amd/backbone.wreqr',
		'backbone.eventbinder': '../components/backbone.eventbinder/lib/amd/backbone.eventbinder',
		'backbone.babysitter': '../components/backbone.babysitter/lib/amd/backbone.babysitter'
	},

	shim: {
		'handlebars': {
			exports: 'Handlebars'
		},
		'json2': {
			exports: 'JSON'
		},
		'jquery': {
			exports: 'jQuery'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['jquery', 'json2', 'underscore', 'backbone'],
			exports: 'Marionette'
		}
	},

	hbs: {
		locale: "en_ca",
		templateExtension: 'hbs',
		disableI18n: true
	}
});

require(['cs!app/app'], function(App) {
	'use strict';
	App.start();
});