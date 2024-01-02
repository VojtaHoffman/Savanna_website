// setup 
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Temperature (°C)',
      data: [5.2, 7.3, 12.1, 17, 21.4, 26, 28.5, 28.7, 24.5, 18.1, 11.9, 6.4],
      backgroundColor: 'rgba(255, 228, 228, 1)',
      borderColor: 'rgba(255, 26, 104, 1)',
      tension: 0.4,
      type: 'line',
      yAxisID: 'left-y-axis'
    }, {
      label: 'Precipitation (mm)',
      data: [64, 70, 109, 127, 149, 100, 68, 61, 89, 100, 91, 80],
      backgroundColor: 'rgba(205, 209, 228, 1)',
      borderColor: 'rgba(40, 67, 135, 1)',
      borderWidth: 2,
      type: 'bar',
      yAxisID: 'right-y-axis',
    }]
  };
  
  // config 
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        'left-y-axis': {
          type: 'linear',
          position: 'left',
          beginAtZero: true,
          title: {
            display: true,
            text: 'Temperature (°C)',
            color: 'rgba(255, 26, 104, 1)',
          },
        },
        'right-y-axis': {
          type: 'linear',
          position: 'right',
          beginAtZero: true,
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: 'Precipitation (mm)',
            color: 'rgba(40, 67, 135, 1)',
          }
        }
      }
    }
  };
  
  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  chartVersion.innerText = Chart.version;

// First chart configuration (Temperature and Precipitation)
// ... existing code for the first chart ...

// Second chart configuration (Temperature Change)
const temperatureChangeLabels = Array.from({ length: 2022 - 1961 + 1 }, (_, i) => i + 1961);
const temperatureChangeData = [
    0.258, -0.242, -0.191, -0.442, -0.299, 0.062, -0.064, -0.641, 0.086, 0.181,
    -0.272, 0.216, 0.535, -0.069, -0.067, 0.229, 0.216, -0.023, 0.055, 0.561,
    0.183, 0.297, 0.609, 0.173, -0.057, 0.133, 0.73, 0.589, -0.208, -0.05, 0.258,
    0.406, 0.048, 0.488, 0.356, 0.366, 0.415, 0.25, 0.24, 0.521, 0.602, 0.734,
    0.879, 0.648, 0.762, 0.89, 0.634, 0.824, 1.293, 1.106, 1.137, 1.026, 0.93,
    1.024, 1.164, 1.237, 1.5, 0.675, 1.624, 1.344, 1.421, 1.28
]; // Complete data here

const temperatureChangeConfig = {
    type: 'line',
    data: {
        labels: temperatureChangeLabels,
        datasets: [{
            label: 'Average Temperature Change (°C)',
            data: temperatureChangeData,
            borderColor: 'rgba(0, 123, 255, 1)',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
};

// Initialize the second chart
const temperatureChangeChart = new Chart(
    document.getElementById('temperatureChangeChart'),
    temperatureChangeConfig
);

// ... rest of the existing JavaScript code ...
