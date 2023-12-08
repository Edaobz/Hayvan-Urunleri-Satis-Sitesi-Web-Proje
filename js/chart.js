google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const data = google.visualization.arrayToDataTable([
        ['Country', 'Mhl'],
        ['Marmara', 54.8],
        ['Akdeniz', 48.6],
        ['Karadeniz', 44.4],
        ['Ege', 23.9],
        ['Diğer', 14.5]
    ]);

    const options = {
        title: 'En Çok Satış Yapılan Bölgeler',
        is3D: true
    };

    const chart = new google.visualization.PieChart(document.getElementById('myChart'));
    chart.draw(data, options);

    


}

  
    