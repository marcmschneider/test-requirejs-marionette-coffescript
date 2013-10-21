define (require) ->

	instance: () ->

		App = require 'cs!app/app'
		ShowView = require 'cs!app/modules/foo/show/views/show_view'

		Controller =

			showFoo: () ->
				fooView = @getFooView()
				App.mainRegion.show fooView

			getFooView: () ->
				new ShowView