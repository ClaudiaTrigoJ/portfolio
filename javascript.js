// JavaScript Document

const card = document.querySelector('.wcard'),
	  sobremi = document.querySelector('.me'),
	  body = document.querySelector('body'),
	  toggle = document.querySelector('.ctoggle');

toggle.addEventListener('click', () => {
		card.classList.toggle("cflip");
		body.classList.toggle("flipmode");
		// sobremi.classList.toggle("active");
	})

toggle.addEventListener('click',() => toggle.classList.toggle("active"));

$('.carousel').carousel({
  interval: false
})

function copiarTexto(){
	var texto = document.getElementById("texto").innerHTML;
	navigator.clipboard.writeText(texto);
	alert("hecho");
}

/*
function copiarTexto(){
	var texto = document.getElementById("texto").innerHTML;
	const copyButton = document.getElementById("copy");
	copyButton.addEventListener('click',() => {
		navigator.clipboard.writeText(texto).then(() => {
			copyButton.disabled = true;

			setTimeout(() => {
				copyButton.disabled = false;
			}, 5000)
		})
	})
}

document.querySelectorAll(".copy").forEach(copyButton => {
	copyButton.addEventListener('click', () => {
		const targetElement = document.querySelector(copyButton.dataset.copy);
		const textToCopy = targetElement.textContent
			.replace(/\s+/g, " ")
			.trim();
		navigator.clipboard.writeText(textToCopy).then(() => {
			copyButton.disabled = true;

			setTimeout(() => {
				copyButton.disabled = false;
			}, 5000)
		})
	})
})

*/