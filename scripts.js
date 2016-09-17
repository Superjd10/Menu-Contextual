/***************************/
// @Author: Superjd10
// @website: https://superjd10.com
// @email: superjd10@superjd10.com
// @license: MIT
/***************************/


//When DOM is ready / Cuando el documento esta listo...
$(document).ready(function(){

//Control variables - variables de control
var menuId = "menuclickderecho"; // This is the menu div - Este es el div del menu declarado en el html y en el css
var menu = $("#"+menuId); //Aca por medio de un selector de jQuery se dice con cual div trabajaremos, es el que dijimos arriba

//EVITAMOS que se muestre el MENU CONTEXTUAL del sistema operativo o del navegador al hacer CLICK con el BOTON DERECHO del RATON
$(document).bind("contextmenu", function(e){
	menu.css({'display':'block', 'left':e.pageX, 'top':e.pageY});
	return false;
});

	//controlamos ocultado de menu cuando esta activo
	//click boton principal raton
	$(document).click(function(e){
		if(e.button == 0 && e.target.parentNode.parentNode.id != menuId){
			menu.css("display", "none");
		}
	});
	//pulsacion tecla escape
	$(document).keydown(function(e){
		if(e.keyCode == 27){
			menu.css("display", "none");
		}
	});

	//Control sobre las opciones del menu contextual
	menu.click(function(e){
		//si la opcion esta desactivado, no pasa nada
		if(e.target.className == "disabled"){
			return false;
		}
		//si esta activada, gestionamos cada una y sus acciones
		else{
			switch(e.target.id){
				//Para ir a la pagina anterior
				case "menu_anterior":
					history.back(-1);
					break;
				//Para recargar la pagina
				case "menu_recargar":
					document.location.reload();
					break;
			}
			menu.css("display", "none");
		}
	});

});
