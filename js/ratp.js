var myInterval

function ratp(config) {
  var template = _.template($('#page-template').html()),
      $content = $('#content');

  var getData = function () {

    var schedules_url = 'https://api-ratp.pierre-grimaud.fr/v4/schedules/rers/a/noisy+champs/'+config;
    var traffic_url   = 'https://api-ratp.pierre-grimaud.fr/v4/traffic/rers/a';

    $.when($.getJSON(schedules_url), $.getJSON(traffic_url)).done(function (schedules, traffic) {
      var date         = new Date(),
          hours        = date.getHours(),
          minutes      = date.getMinutes(),
          current_time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);


      var trafficResponse  = traffic[0].result,
          scheduleResponse = schedules[0].result;

      var data = {
        traffic     : trafficResponse.message,
        line        : 'a',
        type        : 'rer',
        horaires    : scheduleResponse.schedules,
        destination : get_final_station(config),
        station     : 'Noisy-Champs',
        current_time: current_time,
        current_time_minutes: to_minutes(current_time)
      };



      $content.html(template(data));
    });
  };


  getData();
  myInterval = setInterval(getData, 1000);
}

function get_final_station(config) {
  if (config) {
    return 'Marne-la-Vallée Chessy <img src="./img/mickey.png" style="width: 25px;vertical-align: -2px;">'
  }else{
    return 'Saint-Germain-en-Laye'
  }
}
