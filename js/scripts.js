$(document).ready(function() {
  console.log('scripts loaded');

  var url = './js/nations.json';
  var nations = [];
  var html = '';

  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: nations,
    url: url,
    async: true,
    success: function(nations) {
      console.log(nations);

      html += '<div id="chart">';
      html += '<div id="nations-list">';

      //parsing data with for each loop
      nations.forEach(function(nations) {
        html += '<div class="nation-name">' + nations.name + ': ' + nations.Airports + '</div>';
        //add bars
        html += '<div class="bar" style="width:' + nations.Airports / 10 + 'px"></div>';
      });
      html += '</div>';
      html += '</div>';
      $('#results').append(html);
    } //close success function
  });
});