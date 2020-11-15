// drawBarChart function

const drawBarChart = function (data, options) {
  // if there is already a graph present on the page, remove it
  if (document.querySelector('#graphGrid')) {
    document.querySelector('#graphGrid').remove();
  }
  // access where we will put out graphGrid 
  let graphContainer = document.querySelector('#graphElement');
  // create graph grid and add to page
  let graphGrid = document.createElement('div');
  graphGrid.setAttribute('id', 'graphGrid');
  graphGrid.classList.add('graphGrid');
  graphContainer.append(graphGrid);
  graphGrid = document.querySelector('#graphGrid');

    // iterate over labels and add them to grid
    let dataLabels = options.dataLabels;
    for (let i = dataLabels.length - 1; i >= 0; i--) {
      let dataLabel = document.createElement('p');
      dataLabel.innerText = dataLabels[i];
      dataLabel.setAttribute("style", "transform: rotate(240deg)");
      graphGrid.append(dataLabel);
    }

  // iterate over data (backwards because we rotate our graphGrid by 180deg) and add bar for each data point
  for (let i = data.length - 1; i >= 0; i--) {
    let barHeight = parseInt(data[i]) * 10;
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.setAttribute("style", `height:${barHeight}px`)
    graphGrid.append(bar);
  }



  // dynamically change title
  let generatedTitle = document.querySelector('#generatedTitle');
  generatedTitle.innerText = options.title;
}


// initiate our drawBarChart function on clicked by passing in the needed data
const draw = function () {
  let data = getData();
  let options = getOptions()
  
  drawBarChart(data, options);
}

// function to get options from graphForm once submitted
const getOptions = function () {
  const title = document.querySelector('#graphTitle').value;
  let dataLabels = document.querySelector('#dataLabels').value;
  dataLabels = dataLabels.split(',')
  const options = {
    title: title,
    dataLabels: dataLabels
  }
  return options;
}

// function to get data from graphForm once submitted
const getData = function () {
 const dataPoints = document.querySelector('#dataPoints').value;
 return parseData(dataPoints)
};

// parse data into array - array up numbers up to value
const parseData = function (data) {
  parsedData = data.split(',')
  return parsedData
}


// listen for form submit
document.getElementById('graphForm').addEventListener('submit', draw);




