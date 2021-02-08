const next = document.querySelector('.next'); //creo una variable next con el html next
const prev = document.querySelector('.prev'); //creo una variable prev con el html next
const slides = document.querySelectorAll('.slide'); //creo una variable slides que agarre todos los elementos html llamados slide

let index = 0; //index = 0 para saber que estoy en la diapositiva mostrada
display(index); //llamo a funcion display


// creo funcion display que toma el numero de diapositiva en la que estoy y llama a cada elemento de la variable slide y le pone que no se muestre. A la slide que tiene el número de index que dependa de nextSlide o prevSlide, la muestra
function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}

//Creo funcion que se llama nextSlide a la cual toma el numero de index y le agrega uno. Si ese numero es mayor que el largo del array slides - 1(porque empieza en cero), el index vuelve a cero. Después muestro el index, lo mismo con prevSlide
function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}
function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}
//le agrego un event listener a los botones de next y prev y llamo a la función
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);