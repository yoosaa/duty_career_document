// import
import Chart from 'chart.js';


export const WriteChart = () => {

    let data = {
        labels: ["HTML5", "CSS3", "Sass", "jQuery", "ES6", "Vue.js", "php", "Smarty", "MySQL"],
        datasets: [{
            data: [36, 36, 24, 36, 24, 1, 6, 3, 1],
            backgroundColor: 'rgba(3, 102, 214, 1)'
        }]
    };

    let options = {
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 13
                }
            }],
            xAxes: [{
                barPercentage: 0.4,
                categoryPercentage: 0.4,
                scaleLabel: {
                    display: true,
                    labelString: 'ヶ月'
                },
                ticks: {
                    fontSize: 14
                }
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: (tooltipItem, data) => {
                    return [tooltipItem.xLabel + "ヶ月"]
                }
            }
        }
    };

    const ctx = document.getElementById('chart');

    new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: options
    });

};