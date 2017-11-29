if ( window.addEventListener ) {
  var konamiKeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
  
  window.addEventListener( "keydown", function( e ) {
    konamiKeys.push( e.keyCode );
    var d = document.getElementById( "konami" );
    var m = document.getElementById( "musik" );
    if ( konamiKeys.toString().indexOf( konami ) >= 0 ) {
      d.className += "nyancat";
      m.className += "nyancat";
    }
    if ( m.classList.contains( "nyancat" ) ) {
        m.play();
    }
  }, true );
}
