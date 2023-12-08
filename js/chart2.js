google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Aylar', 'Mağaza Satışları', 'Online Satışlar'],
        ['1', 15, 35],
        ['2', 20, 30],
        ['3', 25, 25],
        ['4', 13, 37],
        ['5', 18, 32],
        ['6', 5, 45],
        ['7', 15, 35],
        ['8', 11, 39],
        ['9', 27, 23],
        ['10', 30, 20],
        ['11', 25, 25],
        ['12', 10, 40]
    ]);

    // Set Options
    const options = {
        title: '2023 Yılı Satış Dağılımı',
        hAxis: { title: 'Aylar' },
        vAxis: { title: 'Ürün Miktarı' },
        legend: 'top',
        series: {
            0: { color: 'black' }, // Color of the first line
            1: { color: 'blue' }  // Color of the second line
        }
    };

    // Draw
    const chart = new google.visualization.LineChart(document.getElementById('myChart2'));
    chart.draw(data, options);
}
