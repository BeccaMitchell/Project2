
buildTable(data);

function buildTable(data) {
    var tableArray =[];
    for (i = 0; i < data.length; i++) { 
        tableArray.push([data[i]["Name"], data[i]["Street"], data[i]["YelpCategories"], data[i]["Score"], data[i]["YelpRaiting"],data[i]["YelpReviewCount"]]);
    }
    $(document).ready(function() {
        $('#table_id').DataTable( {
            data: tableArray,
            columns: [
                { title: "Name" },
                { title: "Street" },
                { title: "Yelp Categories" },
                { title: "Health Score" },
                { title: "Yelp Rating" },
                { title: "Yelp Review Count" }
            ]
        } );
    } );
};
