$(function() {
  $('#hakunappi').click(function() {
    $.getJSON('http://api.tvmaze.com/search/shows?q=' + $('#hakuteksti').val(),
        function(data) {
          $('ul').empty();
          $.each(data, function(index, value) {
            console.log(index, value);
            let image = '';
            if (value.show.image) {
              image = value.show.image.medium;
            } else {
              image = 'http://placekitten.com/200/300';
            }
            const html = `<li>
                        <h2>${value.show.name}</h2>
                        <a href="${value.show.officialSite}">Homepage</a>
                        <img src="${image}" alt="${value.show.name}">
                      </li>`;
            $('ul').append($(html));
          });
        });
  });
});
