google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ['Country', 'Ürünler'],
    ['Oyuncak Top', 55],
    ['Peluş Oyuncak', 49],
    ['Kedi Elbisesi', 44],
    ['Köpek Elbisesi', 24],
    ['Omuz Tasması', 15]
  ]);

  const options = {
    title: 'Top 5 Ürün'
  };

  const chart = new google.visualization.BarChart(document.getElementById('myChart3'));
  chart.draw(data, options);
}
