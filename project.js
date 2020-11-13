// drawBarChart function

const drawBarChart = function (data) {
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
  
  for (let i = 0; i < data.length; i++) {
    let bar = document.createElement('div');
    bar.classList.add('bar')
    graphGrid.append(bar);
  }
}


const draw = function () {
  let data = getData();
  
  drawBarChart(data);
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




