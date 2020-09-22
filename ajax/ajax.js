$(function() {
  $('#hakunappi').click(function(){
    $.getJSON('http://api.tvmaze.com/search/shows?q=' + $('#hakuteksti').val(), function(data){
      $('ul').empty();
      $.each(data, function(index, value){
        console.log(index, value);
        const html = `<li>
                        <h2>${value.show.name}</h2>
                        <a href="${value.show.officialSite}">Homepage</a>
                        <img src="${value.show.image ? value.show.image.medium : 'http://placekitten.com/200/300'}" alt="${value.show.name}">
                      </li>`;
        $('ul').append($(html));
      });
    });
  });
});
