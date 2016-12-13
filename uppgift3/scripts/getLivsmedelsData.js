var url = 'https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php';
var sokOrd;

$("#tabell").hide();

document.addEventListener('DOMContentLoaded', function(event) {
	var sokButton = document.getElementById('sok-button');
	sokButton.setAttribute('onclick', 'search()');
	sokOrd = document.getElementById('livsmedelsSokOrd');
});

var search = function() {
	document.getElementById('tabell').getElementsByTagName('tbody')[0].innerHTML = "";
	var query = sokOrd.value;
	var searchQuery = url + '?namn=' + query + '&callback=getLivsmedel';
	searchRequest(searchQuery);
}

var searchRequest = function(url) {
	$.ajax({
        url: url,
        dataType: "jsonp",
        
        success: function (response) {
        	console.log(sokOrd.value)
            var livsmedelArray = response.livsmedel;
            console.log(livsmedelArray)
            for(var i=0; i < livsmedelArray.length; i++) {
                var livsmedel = livsmedelArray[i];
                livsmedel = '<tr><td>' + livsmedel.namn + '</td><td>' + livsmedel.energi + '</td><td>' 
                	+ livsmedel.kolhydrater + '</td><td>' + livsmedel.protein + '</td><td>' 
                	+ livsmedel.fett + '</td></tr>';
                $('#tabell tbody').append(livsmedel);
            }
            if (livsmedelArray.length > 0) {
            	$("#tabell").show();
            } else $("#tabell").hide();
        }
    });
}

