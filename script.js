function printLine(data) {

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: moment.months(),
        datasets: [{
            label: 'Vendite',
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
});
}


function getData() {

  $.ajax({

    url: 'getLineAllData.php',
    method: 'GET',
    success: function(data) {
      console.log('data', data);
      printLine(data);
    },
    error: function(err){
      console.log('error', err);
    }
  });
}


function init(){
  getData();
}

$(document).ready(init);
