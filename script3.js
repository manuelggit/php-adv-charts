function printAllChart(outputId, chartType, labels, label, data1, data2, data3, zero){
  var ctx = $('#' + outputId);
  var myChart = new Chart(ctx, {
      type: chartType,
      data: {
          labels: labels,
          datasets: [{
              label: label,
              data: data1,
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
          },
          {
              label: label,
              data: data2,
              backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                  // 'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1
          },
          {
              label: label,
              data: data3,
              backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                  // 'rgba(255, 99, 132, 1)',
                  // 'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1
          }
        ]
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
  var miavar = "<?php print $variabile; ?>"";

  printAllChart('lineChart', data['type'], moment.months(), 'Vendite', data['data'], true);

}


function printPie(data) {

  var nomi = Object.keys(data['data']);
  var venditeNomi = Object.values(data['data']);

  printAllChart('pieChart', data['type'], nomi, '', venditeNomi);

}

function printSecondLine(data) {

  var team = Object.keys(data['data']);
  console.log('team', team);
  var valoriTeam1 = Object.values(data['data']['Team1']);
  console.log('valoriTeam1', valoriTeam1);
  var valoriTeam2 = Object.values(data['data']['Team2']);
  console.log('valoriTeam2', valoriTeam2);
  var valoriTeam3 = Object.values(data['data']['Team3']);
  console.log('valoriTeam3', valoriTeam3);

  printAllChart('secondlineChart', data['type'], moment.months(), 'Vendite ', valoriTeam1);



}

function getData3() {

  $.ajax({

    url: 'getAllData3.php',
    method: 'GET',
    success: function(data) {
      console.log('data', data);
      printLine(data['fatturato']);
      printPie(data['fatturato_by_agent']);
      printSecondLine(data['team_efficiency']);
    },
    error: function(err){
      console.log('error', err);
    }
  });
}

function init(){
  getData3();
}

$(document).ready(init);
