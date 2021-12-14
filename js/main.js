const btnMenu = document.getElementById("btn-dpw"),
        btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
        grid = document.getElementById("grid"),
        contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
        esDispositivoMovil = () => window.innerWidth <= 800; 

btnMenu.addEventListener("mouseover", () => {
    if(!esDispositivoMovil()){
        grid.classList.add("activo");
    }
});
        
grid.addEventListener("mouseleave", () => {
    if(!esDispositivoMovil()){
        grid.classList.remove("activo");
    }
});



// EventListeners para dispositivo movil.

document.querySelector("#btn-menu-barras").addEventListener("click", (e) => {
	e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton del logo (Para version movil).

btnMenu.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});

// Boton de regresar en el menu.
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e)=> {
	e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});

