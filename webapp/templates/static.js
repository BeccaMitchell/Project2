// from data.js
var tableData = data


console.log(data)
// Select Table body
$('#test').DataTable();
var tablebody = d3.select("tbody")

//Initialize table

function yelpData(data) {
    tablebody.html("");
    data.forEach((datarow)=> {
        var row = tablebody.append("tr");
        Object.values(datarow).forEach((value)=>{
            var cell = row.append("td");
            cell.text(value);
        })
    })
}
yelpData(tableData);

function filterTable(){
    d3.event.preventDefault()
    var name = d3.select("#restaurantname").property("value")
    if (name) {
        var filterData = tableData.filter(row=> row.name === name)
    }
yelpData(filterData)
}

d3.selectAll("#filter-btn").on("click", filterTable)