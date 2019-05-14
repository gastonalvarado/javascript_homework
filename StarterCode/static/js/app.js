// from data.js
var tableData = data

// // Get a reference to the table body
// var tbody = d3.select('tbody')

// // Console.log the weather data from data.js
// console.log(tableData);

// // // Step 5: Use d3 to update each cell's text with
// // // weather report values (weekday, date, high, low)

// //function displayData(data) {
// //tbody.text("")

// data.forEach(function(ufos) {
//     console.log(ufos);
//     var row = tbody.append("tr");
//     Object.entries(ufos).forEach(function([key, value]) {
//         console.log(key, value);
//         //Append a cell to the row;
//         //for each value;
//         //in the weather report object;
//         var cell = row.append("td");
//         cell.text(value);
//     })
// })

// displayData(tableData)

// //select the web user's input and the filter button
// var dateInputText = d3.select("#datetime")
// var button = d3.select("filter-btn")

// // filter data with date that the user inputs
// function clickSelect() {
//     //don't refresh the page!
//     d3.event.preventDefault();
//     //print the value that was input
//     console.log(dateInputText.property("value"));
//     //create a new table showing only the filterd data
//     var new_table = tableData.filter(sighting => sighting.datetime === dateInputText.property("value"))
//         //display the new table
//     displayData(new_table);
// }

// // event listener to handle change and click
// dateInputText.on("change", clickSelect)
// }

// select tbody 
tbody = d3.select("tbody")

// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function displayData(data) {
    tbody.text("")
    data.forEach(function(sighting) {
        new_tr = tbody.append("tr")
        Object.entries(sighting).forEach(function([key, value]) {
            new_td = new_tr.append("td").text(value)
        })
    })
}

displayData(tableData)

//select user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date that the user inputs
function clickSelect() {
    //don't refresh the page!
    d3.event.preventDefault();
    //print the value that was input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime === dateInputText.property("value"))
        //display the new table
    displayData(new_table);
}

// event listener to handle change and click
dateInputText.on("change", clickSelect)

function clearContent() {
    document.getElementById("output").value = '';
}