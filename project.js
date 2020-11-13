const draw = function () {
  let data = getData();
  alert(typeof(data))
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




