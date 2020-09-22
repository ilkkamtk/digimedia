$(function() {
  $('#hakunappi').click(function(){
    $.getJSON('http://api.tvmaze.com/search/shows?q=' + $('#hakuteksti').val(), function(data){
      $('ul').empty();
      $.each(data, function(index, value){
        console.log(index, value);
        const html = `<li>
                        <h2>${value.show.name}</h2>
                        <p>${palautaTeksti(value.show.genres)}</p>
                        <a href="${value.show.officialSite ? value.show.officialSite : value.show.url}" target="_blank">Homepage</a>
                        <img src="${value.show.image ? value.show.image.medium : 'http://placekitten.com/200/300'}" alt="${value.show.name}">
                        ${value.show.summary}
                      </li>`;
        $('ul').append($(html));
      });
    });
  });

  function palautaTeksti(taulukko){
    let teksti = '';
    $.each(taulukko, function(index, value){
      teksti += value + '&nbsp;';
    });
    return teksti;
  }

});
