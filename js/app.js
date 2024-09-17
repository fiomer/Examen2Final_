// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Home',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/flyknit/',
    	url: 'flyknit.html',
    	name: 'flyknit',
  		},
		{
		path: '/perfil/',   // Aquí agregas la nueva ruta
    	url: 'perfil.html', // Asegúrate de tener este archivo
    	name: 'perfil',
  		}
	],
	dialog: {
		title: 'Sneakers',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});

// Código adicional para eventos y lógica
$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});

$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();
	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
		// Actualizar nombre y correo dinámicamente en el perfil
document.addEventListener('DOMContentLoaded', function() {
  // Suponiendo que tienes los datos del usuario en localStorage o una API
  var userName = 'John Doe';  // O obtener esto de una API o localStorage
  var userEmail = 'john.doe@example.com';

  document.querySelector('#panel-profile h2').textContent = userName;
  document.querySelector('#panel-profile .mail').textContent = userEmail;
});

	});
});
