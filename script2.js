function printAllChart(outputId, chartType, labels, label, data, zero){
  var ctx = $('#' + outputId);
  var myChart = new Chart(ctx, {
      type: chartType,
      data: {
          labels: labels,
          datasets: [{
              label: label,
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: zero,
                }
            }]
        }
    }
  });
}

function printLine(data) {

  printAllChart('lineChart', data['type'], moment.months(), 'Vendite', data['data'], true);

}


function printPie(data) {

  var nomi = Object.keys(data['data']);
  var venditeNomi = Object.values(data['data'], false);

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
