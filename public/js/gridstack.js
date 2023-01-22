$(function () {
    var options = {
        cellHeight: 80,
        verticalMargin: 10
    };
    $('.grid-stack').gridstack(options);
    $('.grid-stack').gridstack(options);

    // Add new widget button
    $('#add-widget').click(function () {
        var widget = '<div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2"><div class="grid-stack-item-content">New Widget</div></div>';
        $('.grid-stack').append(widget).gridstack().makeWidget(widget);
    });

    // Delete widget button
    $('.grid-stack').on('click', '.trash', function () {
        var grid = $('.grid-stack').data('gridstack');
        grid.removeWidget($(this).closest('.grid-stack-item'));
    });
});

var chart1 = new Chart(document.getElementById("chart1"), {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: "rgba(55,99,132,0.2)",
            borderColor: "rgba(255,99,2,1)",
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var chart2 = new Chart(document.getElementById("chart2"), {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: "rgba(2,99,132,0.2)",
            borderColor: "rgba(255,9,13,1)",
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero
: true
}
}
}
});

// Speedometer section
var ctx = document.getElementById('Speedometer').getContext('2d');
var speedometer = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['',''],
        datasets: [{
            label: 'Speed',
            data: [0, 130],
            backgroundColor: ['white', 'red'],
            borderWidth: 0
        }]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        tooltips: {
            enabled: false
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
        responsive: false,
        maintainAspectRatio: false
    }
});

let isRunning = false;
$("#on-off").change(function() {
    isRunning = this.checked;
    if(isRunning){
        setInterval(() => {
            let currentSpeed = speedometer.data.datasets[0].data[0];
            currentSpeed++;
            if(currentSpeed > 130) currentSpeed = 0;
            speedometer.data.datasets[0].data[0] = currentSpeed;
            speedometer.update();
        }, 1000);
    }
});

