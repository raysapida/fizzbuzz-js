$(document).ready(function() {
  $( "#item" ).submit(function( event ) {
    var input = +$("input").val();

    fizzbuzz(input);

    event.preventDefault();
  });

});

function fizzbuzz(max_number) {
  for(i=1; i < (max_number+1); i++){
    if ( (i % 3 == 0) && (i % 5 == 0)){
      $('body').append('<p>FizzBuzz</p>');
    } else if ( i % 3 == 0) {
      $('body').append('<p>Fizz</p>');
    } else if ( i % 5 == 0) {
      $('body').append('<p>Buzz</p>');
    } else {
      $('body').append('<p>'+i+'</p>');
    };
  };
}
