$(document).ready(generateMenu);
var postList

function generateMenu() {
	// Lägger till ett ul-element i contentarea i receptmenyn
	var menu = document.getElementById('receptmeny').getElementsByClassName('contentarea')[0];
	var list = document.createElement('ul');
	menu.appendChild(list);

	// Skapar en lista över recepten och lägger till länkar i menyn
	postList = document.getElementsByClassName('post');
	for (var i = 0; i < postList.length; i++) {
		// Döljer alla utom första receptet
		if (i != 0) {
			postList[i].style.display = 'none';
		}
		// Ger aktuellt recept ett unikt id och hämtar receptnamnet
		postList[i].setAttribute('id', 'post_' + i);
		var name = postList[i].getElementsByTagName('h4')[0].innerHTML;

		// Skapar ett li-element med en länk till aktuellt recept och lägger till det i listan
		var element = document.createElement('li');
		var link = document.createElement('a');
		link.setAttribute('href', '#post_' + i); // Länk till id för aktuellt recept
		link.setAttribute('onclick', 'displayRecipe(event)'); // Funktion som körs när länken klickas
		name = document.createTextNode(name);
		link.appendChild(name);
		element.appendChild(link);
		menu.getElementsByTagName('ul')[0].appendChild(element);
	}
}

// Visar önskat recept och döljer övriga
var displayRecipe = function(event) {
	var id = event.srcElement.getAttribute('href');
	for (var i = 0; i < postList.length; i++) {
		if ('#' + postList[i].getAttribute('id') === id) {
			postList[i].style.display = 'inline';
		} else postList[i].style.display = 'none';
	}
}