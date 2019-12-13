function printLine(data) {

var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: data['type'],
    data: {
        labels: moment.months(),
        datasets: [{
            label: 'Vendite',
            data: data['data'],
        }]
    },
});
}


function printPie(data) {

  var nomi = Object.keys(data['data']);
  var venditeNomi = Object.values(data['data']);

  var ctx = document.getElementById('pieChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: nomi,
          datasets: [{
              label: 'Vendite',
              data: venditeNomi
          }]
      },
  });
}

function getData2() {

  $.ajax({

    url: 'getAllData2.php',
    method: 'GET',
    success: function(data) {
      console.log('data', data);
      printLine(data['fatturato']);
      printPie(data['fatturato_by_agent']);
    },
    error: function(err){
      console.log('error', err);
    }
  });
}

function init(){
  getData2();
}

$(document).ready(init);
