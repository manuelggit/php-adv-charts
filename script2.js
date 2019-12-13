function printAllChart(outputId, chartType, labels, label, data){
  var ctx = $('#' + outputId);
  var myChart = new Chart(ctx, {
      type: chartType,
      data: {
          labels: labels,
          datasets: [{
              label: label,
              data: data,
          }]
      },
  });
}

function printLine(data) {

  printAllChart('lineChart', data['type'], moment.months(), 'Vendite', data['data']);

}


function printPie(data) {

  var nomi = Object.keys(data['data']);
  var venditeNomi = Object.values(data['data']);

  printAllChart('pieChart', data['type'], nomi, '', venditeNomi);

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
