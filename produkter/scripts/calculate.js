var totalSum;
var totalQuantity;
var pricetable;
var columnHeaders;
var tableBodyRows;
var tableBody;
var content;
var sumRow = '<tr id="sumrow"> <td></td> <td></td> <td></td> <td></td> <td id="totalQuantity"></td> <td id="totalSum"></td> </tr>';
var sumButton = '<br /><input type="button" value="Beräkna pris" onclick="calculateSum()"></input><br /><br />';

document.addEventListener('DOMContentLoaded', function(event) {
	// Lägger till columntitel
	pricetable = document.getElementById('pricetable');
	columnHeaders = pricetable.getElementsByTagName('tr')[0].innerHTML;
	pricetable.getElementsByTagName('tr')[0].innerHTML = columnHeaders + '<td>Summa</td>';

	// Lägger till columnfält och onChange-attribut till input-fälten i tabellen
	tableBodyRows = pricetable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

	for (var i = 0; i < tableBodyRows.length; i++) {

		tableBodyRows[i].innerHTML = tableBodyRows[i].innerHTML + '<td id="col' + i + '"></td>';
		tableBodyRows[i].getElementsByTagName('input')[0].setAttribute('onChange', 'updateValue(event)');
		tableBodyRows[i].getElementsByTagName('input')[0].setAttribute('id', 'qnty' + i);

	}

	// Lägger till summeringsrad
	tableBody = pricetable.getElementsByTagName('tbody')[0].innerHTML;
	pricetable.getElementsByTagName('tbody')[0].innerHTML = tableBody + sumRow; 

	// Lägger till en knapp
	content = document.getElementById('content').innerHTML;
	content += sumButton;
	document.getElementById('content').innerHTML = content;
});


// Räknar ut summan för varje produkt och totalsumman
var calculateSum = function() {

	totalSum = 0, totalQuantity = 0;

	for (var i = 0; i < tableBodyRows.length - 1; i++) {

		var price = tableBodyRows[i].getElementsByTagName('td')[3].innerHTML;
		var quantity = document.getElementById('qnty' + i).getAttribute('value');
		quantity = Number(quantity);
		price *= quantity;
		document.getElementById('col' + i).innerHTML = price;

		totalSum += price;
		totalQuantity += quantity;

	}
	document.getElementById('totalQuantity').innerHTML = totalQuantity;
	document.getElementById('totalSum').innerHTML = totalSum;
}

// Uppdaterar value-attributet vid ändring i input-fält
var updateValue = function(event) {
	var value = event.target.value;
	event.target.setAttribute('value', value);
	
}



