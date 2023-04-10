var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var intentos = 0;
var historial=document.getElementById('historial');

function adivinar() {
	var numeroUsuario = document.getElementById("numero").value;
	if (numeroUsuario == numeroSecreto) {
		alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
	} else if (numeroUsuario < numeroSecreto) {
        historial.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;"+numeroUsuario+" es menor ";
		intentos++;
	} else {
		historial.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;"+numeroUsuario+" es mayor ";
		intentos++;
	}
}
