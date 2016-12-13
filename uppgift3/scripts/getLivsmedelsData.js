var url = 'https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php';
var sokOrd;
var tbody;
var table;

document.addEventListener('DOMContentLoaded', function(event) {
	var sokButton = document.getElementById('sok-button');
	sokButton.setAttribute('onclick', 'search()');
	sokOrd = document.getElementById('livsmedelsSokOrd');
	table = document.getElementById('tabell');
	tbody = document.getElementById('tabell').getElementsByTagName('tbody')[0];
	table.style.visibility = "hidden";
});

var search = function() {
	tbody.innerHTML = "";
	var query = sokOrd.value;
	var searchQuery = url + '?namn=' + query + '&callback=getLivsmedel';
	searchRequest(searchQuery);
}

var searchRequest = function(url) {
	$.ajax({
        url: url,
        dataType: "jsonp",
        
        success: function (response) {
            var livsmedelArray = response.livsmedel;
            for(var i=0; i < livsmedelArray.length; i++) {
                var livsmedel = livsmedelArray[i];
                livsmedel = '<tr><td>' + livsmedel.namn + '</td><td>' + livsmedel.energi + '</td><td>' 
                	+ livsmedel.kolhydrater + '</td><td>' + livsmedel.protein + '</td><td>' 
                	+ livsmedel.fett + '</td></tr>';
                tbody.innerHTML += livsmedel;
            }
            setTableVisibility(livsmedelArray.length);
        }
    });
}

var setTableVisibility = function(length) {
	if (length > 0) {
    	table.style.visibility = "visible";
    } else table.style.visibility = "hidden";
}

