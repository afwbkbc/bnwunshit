var CONFIG = {
	shitposters: [ 'anonymous', 'mad_hatter', 'telegram' ],
}

var l = function( text ) {
	console.log( '[BnwUnshit] ' + text );
	return false;
}

var stats = {
	removed: 0,
}

$( window ).ready( function() {

	var toclean = [ 'message', 'comment' ];
	
	for ( var i = 0 ; i < toclean.length ; i++ ) {
		var t = toclean[ i ];
		
		var messages = $( '#' + t + 's' );
		if ( messages.length ) {
			
			messages.find( '.' + t ).each( function( m ) {
				
				var is_shit = false;
				
				var sign = $( this ).find( '.sign' );
				if ( !sign.length )
					return l( 'parsing failed #1' );
				var usrid = sign.find( '.usrid' );
				if ( !usrid.length )
					return l( 'parsing failed #2' );
				
				var author = usrid.html();
				if ( author[ 0 ] != '@' )
					return l( 'parsing failed #3' );
				author = author.substring( 1 );
				
				if ( CONFIG.shitposters.indexOf( author ) >= 0 )
					is_shit = true;
				else {
					
					
					
					
				}
				
				if ( is_shit ) {
					var toremove = $( this );
					if ( t == 'comment' )
						toremove = toremove.parent();
					toremove.remove();
					stats.removed++;
				}
			});
		}
	}
	
	if ( stats.removed > 0 )
		l( 'removed ' + stats.removed + ' shits' );
	else
		l( 'page clean' );
	
});
