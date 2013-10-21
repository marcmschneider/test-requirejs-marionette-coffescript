define (require) ->

	Marionette = require 'marionette'
	FooModule = require 'cs!app/modules/foo/foo_module'

	App = new Marionette.Application

	App.addRegions
		mainRegion: '#main-region'

	App.addInitializer ->
		FooModule.instance().start()

	App.on 'initialize:after', ->
		if Backbone.history
			Backbone.history.start()

	App