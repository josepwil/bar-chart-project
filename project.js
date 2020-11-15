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
  // iterate over data and add bar for each data point
  for (let i = 0; i < data.length; i++) {
    let bar = document.createElement('div');
    bar.classList.add('bar')
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
  const options = {
    title: title
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
  let parsedData = [];
  for (let i = 1; i <= data; i++) {
    parsedData.push(i);
  }
  return parsedData
}

// listen for form submit
document.getElementById('graphForm').addEventListener('submit', draw);




