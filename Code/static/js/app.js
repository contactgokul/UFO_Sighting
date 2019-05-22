// from data.js
var tableData = data;

// assigning variables
    // select the submit button
var submit = d3.select("#filter-btn");
    //select the body
var tbody = d3.select("tbody");

// append all the data onto html
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});

// take the input from the user and filter the data (submit was assigned above)
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // filter the data table to match user's input
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    tbody.html("");
    
    // displayed filtered data
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
 });
