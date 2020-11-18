// drawBarChart function

const drawBarChart = function (data, options) {
  // if there is already a graph present on the page, remove it
  if (document.querySelector('#graphGrid')) {
    document.querySelector('#graphGrid').remove();
  }
 
  // access where we will put out graphGrid 
  let graphContainer = document.querySelector('#graphElement');

  // add yAxisTicks to graph
  let maxVal = 10;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i]) > maxVal) {
      maxVal = parseInt(data[i]);
    }
  }
  let j = 1;
  // set yxis
  if (maxVal > 10 && maxVal <= 100) {
    maxVal = 100;
    j = 10;
  } else if (maxVal > 100 && maxVal <= 1000) {
    maxVal = 1000;
    j = 100;
  }


  // check is yaxis ticks already and exist and remove if they do
  if (document.querySelector('#yAxisTicks')) {
    document.querySelector('#yAxisTicks').remove();
  }

  let yTicks = document.createElement('div');
  yTicks.setAttribute('id', 'yAxisTicks');
  graphContainer.append(yTicks);

  yTicks.setAttribute("style", `grid-template-row: repeat(${maxVal}, auto)`);

  // scale according to size of data
  for (let i = maxVal; i > 0; i-=j) {
    let yTick = document.createElement('div');
    yTick.setAttribute("style", "height: 10%");
    yTicks.append(yTick);
    let yTickNum = document.createElement('p');
    yTickNum.innerText = i;
    yTickNum.setAttribute("style", "font-size: auto");
    yTick.append(yTickNum);
  }

  // create graph grid and add to page
  let graphGrid = document.createElement('div');
  graphGrid.setAttribute('id', 'graphGrid');
  graphGrid.classList.add('graphGrid');
  // work out width for each grid column (400 because we want grid to be that size)
  let columnSize = 400 / data.length
    // dynamically add number of columns
  graphGrid.setAttribute("style", `	grid-template-columns: repeat(${data.length}, ${columnSize}px)`);
  graphContainer.append(graphGrid);
  graphGrid = document.querySelector('#graphGrid');

  
  // iterate over data (backwards because we rotate our graphGrid by 180deg) and add bar for each data point
  for (let i = data.length - 1; i >= 0; i--) {
    let barHeight = parseInt(data[i]);
    // bar height * or / depeding on max size
    if (maxVal > 100) {
      barHeight = barHeight / 10;
    } else if (maxVal === 10) {
      barHeight = barHeight * 10;
    }
    
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.setAttribute("style", `height:${barHeight}%`);
    graphGrid.append(bar);
    bar.style.width = `${columnSize}px`;

    // add value inside of bar
    let valInBar = document.createElement('p');
    valInBar.innerText = data[i];
    bar.append(valInBar);
    bar.classList.add('valInBar')

    // set color of bar
    let barColor = document.querySelector('#barColor').value;
    changeColor(bar, barColor);
  }
  
  // dynamically change title
  let generatedTitle = document.querySelector('#generatedTitle');
  generatedTitle.innerText = options.title;

  // add x and y labels to graph
  let xLabelText = document.querySelector('#xAxis').value;
  let xLabel = document.querySelector('#xAxisOutput')
  xLabel.innerText = xLabelText;
  let yLabelText = document.querySelector('#yAxis').value;
  let yLabel = document.querySelector('#yAxisOutput');
  yLabel.innerText = yLabelText;



  // checks labels don't already exist in grid and removes them if they do 
  if (document.querySelector('#xAxisLabels')) {
    document.querySelector('#xAxisLabels').remove();
  }

  if (document.querySelector('#zeroX')) {
    document.querySelector('#zeroX').remove();
  }
  // add 0 to grid
  let zeroX = document.createElement('p');
  zeroX.innerText = '0';
  zeroX.setAttribute("id", "zeroX");
  graphContainer.append(zeroX);

  // iterate over labels and add them to grid
  let dataLabels = options.dataLabels;
  let xAxisLabels = document.createElement('div');
  xAxisLabels.setAttribute("id", "xAxisLabels")
  graphContainer.append(xAxisLabels);

  for (let i = 0; i < dataLabels.length; i++) {
    let dataLabel = document.createElement('p');
    dataLabel.innerText = dataLabels[i];
    xAxisLabels.append(dataLabel);
  }


}


// initiate our drawBarChart function on clicked by passing in the needed data
const draw = function () {
  let data = getData();
  let options = getOptions();
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


// change colour 
const changeColor = function (element, color) {
  element.style.background = color
}

// listen for form submit
document.getElementById('graphForm').addEventListener('submit', draw);




