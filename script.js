function printData(data) {

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: moment.months(),
        datasets: [{
            label: 'Vendite',
            data: data,
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
      printData(data);
    },
    error: function(err){
      console.log('error', err);

    }

  })

}


function init(){
  getData();
}

$(document).ready(init);
