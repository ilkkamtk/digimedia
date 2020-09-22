$(function() {
  $('#hakunappi').click(function(){
    $.getJSON('http://api.tvmaze.com/search/shows?q=' + $('#hakuteksti').val(), function(data){
      $('ul').empty();
      $.each(data, function(index, value){
        console.log(index, value);
        const html = `<li><h2>${value.show.name}</h2><a href=""></a> </li>`;
        $('ul').append($(html));
      });
    });
  });
});
