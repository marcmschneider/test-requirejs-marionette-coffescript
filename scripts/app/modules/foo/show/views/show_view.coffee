define (require) ->

	Marionette = require 'marionette'

	class ShowView extends Marionette.ItemView
		template: require 'hbs!app/modules/foo/show/templates/show_foo'