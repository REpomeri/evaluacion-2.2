

//SCRIP CARRUSEL
$('.carousel').carousel({
	interval: 2500 // tiempo en milisegundos
});
//SCRIP BUSCADOR
var options = ["valvulas", "suspencion", "scanner", "pantete"];
function autocomplete() {
	var input = document.getElementById("searchInput").value.toLowerCase();
	var autocompleteList = document.getElementById("autocompleteList");

	autocompleteList.innerHTML = '';
	options.forEach(function(option) {
		if (option.includes(input)) {
			var listItem = document.createElement("li");
			listItem.textContent = option;
			listItem.onclick = function() {
				document.getElementById("searchInput").value = option;
				searchAndRedirect();
			};
			autocompleteList.appendChild(listItem);
		}
	});
}

// Función para manejar el autocompletado y redireccionamiento
function searchAndRedirect() {
	var searchTerm = document.getElementById("searchInput").value.toLowerCase();

	switch (searchTerm) {
		case "valvulas":
			window.location.href = "auto1.html";
			break;
		case "suspencion":
			window.location.href = "auto2.html";
			break;
		case "scanner":
			window.location.href = "auto3.html";
			break;
		case "pantete":
			window.location.href = "auto4.html";
			break;
		case "juan":
			window.location.href = "mecanico1.html";
			break;
		case "francisco":
			window.location.href = "mecanico2.html";
			break;
		case "ignacio":
			window.location.href = "mecanico3.html";
			break;
			case "jhon":
			window.location.href = "mecanico4.html";
			break;
		default:
			alert("No se encontraron resultados para '" + searchTerm + "'.");
			break;
	}
}