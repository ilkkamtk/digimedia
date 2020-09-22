$(function() {
  const valitseVari = function(evt) {
    $(this).hide();
    const vari = $(this).attr('src').split('.')[0];
    $('ul').append($('<li>' + vari + '</li>'));
  };

  $('button').click(function() {
    $('#advice').html('select your favourite colour among the colours');
    $('#img1').attr('src', 'red.jpg').click(valitseVari);
    $('#img2').attr('src', 'blue.jpg').click(valitseVari);
    $('#img3').attr('src', 'yellow.jpg').click(valitseVari);
    $('#sel').html('your favourite colours in order');
  });
});

