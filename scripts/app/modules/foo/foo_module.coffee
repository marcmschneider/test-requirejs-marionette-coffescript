define (require) ->

	instance: () ->

		App = require 'cs!app/app'
		ShowController = require 'cs!app/modules/foo/show/show_controller'

		FooModule = App.module('FooModule')

		FooModule.startWithParent = false

		API =
			showFoo: ->
				ShowController.instance().showFoo()

		FooModule.on 'start', ->
			API.showFoo()