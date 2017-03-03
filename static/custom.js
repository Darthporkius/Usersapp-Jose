$( document).ready( function() {
	console.log('DOM is ready')
	$(#searchbar).on( 'submit', function(event){
		event.preventDefault()
		console.log('The submit button works')
	})
})