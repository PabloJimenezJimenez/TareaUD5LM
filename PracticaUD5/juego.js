var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var intentos = 0;
var historial=document.getElementById('historial');

function adivinar() {
	var numeroUsuario = document.getElementById("numero").value;
	if (numeroUsuario == numeroSecreto) {
		alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
	} else if (numeroUsuario < numeroSecreto) {
        historial.innerHTML+="<h2>"+numeroUsuario+" es menor";
		intentos++;
	} else {
		historial.innerHTML+="<h2>"+numeroUsuario+" es mayor";
		intentos++;
	}
}
