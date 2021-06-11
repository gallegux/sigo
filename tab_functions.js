
function getElementByNAV(nombreElemento, nombreAtributo, valorAtributo)
{
	ee = document.getElementsByTagName(nombreElemento)
	
	for (i = 0; i < ee.length; i++) {
		if (ee[i].getAttribute(nombreAtributo) == valorAtributo) {
			return ee[i]
		}
	}
	return -1
}



function getElementByNI(nombreElemento, innerHTMLtext) {
	ee = document.getElementsByTagName(nombreElemento)
	
	for (i = 0; i < ee.length; i++) {
		if (ee[i].innerHTML == innerHTMLtext) {
			return ee[i]
		}
	}
	return -1
}


function buscarElemento(tagName, contenido) {
	eles = document.getElementsByTagName(tagName)
	
	for (i = 0; i < eles.length; i++) {
		if (eles[i].innerHTML.indexOf(contenido) != -1) {
			console.log('encontrado ' + contenido)
			return eles[i]
		}
	}
	return -1
}


function quitarEnlace() {

	a = getElementByNI('a', 'Ir directamente a contenido principal')
		
	if (a != -1) {
		a.innerHTML = ""
		enlace_quitado = true
		console.log("quitado")
	}

	setTimeout(quitarEnlace,1000, "JavaScript")
}



var recien_cargado = true

function refrescar() {
	if (recien_cargado) {
		recien_cargado = false
	}
	else {
		b = getElementByNAV('button', 'title', 'Actualizar consola')
		if (b != -1) {
			b.click()
		}
	}
}


function cambiarIcono() {
	a = getElementByNAV('link', 'rel', 'shortcut icon')

	if (a != -1) {
		a.href = chrome.runtime.getURL("./icon16.png");
	}
}


function crearLink(nombre, url) {
	a = document.createElement('a')
	a.innerHTML = nombre
	a.href = url
	a.target = '_blank'
	a.style.fontSize = '19px'
	
	return a
}

/**
function anadirCRU() {
	opts = [ 
		{nombre: '<b>CRU:</b>', url: 'http://cru.es'},
		{nombre: 'Alta&nbsp;usuarios', url: 'https://cru.jccm.es/usuarios/index.php'} , 
		{nombre: 'Buscar&nbsp;usuarios', url: 'https://cru.jccm.es/usuarios/buscar.php?estado=0'} , 
		{nombre: 'Personal&nbsp;docente', url: 'http://educacion.jccm.es/gesid/gesid/buscarUsuario/buscarUsuario.jsf'} , 
		{nombre: 'Registro&nbsp;de&nbsp;cambios', url: 'https://cru.jccm.es/usuarios/logs.php'} , 
		{nombre: 'Telefonía&nbsp;IP', url: 'https://cru.jccm.es/AXL105/'} , 
		{nombre: 'Listas&nbsp;de&nbsp;distribución', url: 'https://cru.jccm.es/usuarios/listas.php'},
		{nombre: '<b>OCS</b>', url: 'http://ocs.jclm.es/ocsreports/'}
	]

	tabla = document.createElement('table')
	//tabla.style = 'position: absolute; bottom: 0px; width: 100%; height: 37px !important; background-color: #002855; z-index: 2;'
	tabla.setAttribute('id', 'barraCRU')
	
	fila = document.createElement('tr')
	tabla.appendChild(fila)
	
	for (i = 0; i < opts.length; i++) {
		opt = opts[i]
		console.log(i+" "+opt.nombre)
		celda = document.createElement('TD')
		celda.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
		fila.appendChild(celda)
		celda = document.createElement('TD')
		enlace = crearLink(opt.nombre, opt.url)
		celda.appendChild(enlace)
		fila.appendChild(celda)
	}
	celda = document.createElement('TD')
	celda.width = '100%'
	fila.appendChild(celda)
	
	document.body.appendChild(tabla)
}
**/

function anadirEsquina() {
	x = document.createElement('div')
	x.setAttribute('id', 'espineteTumbado')	
	document.body.appendChild(x)
}


function revisarEsquina() {
	espi = document.getElementById('espineteTumbado')
	
	if (espi != null) {
		dl = ''+document.location
		
		if (dl.indexOf('ticket-console') != -1) {
			espi.className = ''
			espi.className = 'espineteTumbadoVisible'
			//espi.style.zIndex = 1
		}
		else {
			//espi.style.zIndex = -1
			espi.className = 'espineteTumbadoNoVisible'
		}
		/*
			divnose = buscarElemento('div', 'No se encontraron resultados')
			if (divnose != -1) {
				console.log('pagina con resultados')
				espi.style.zIndex = 100
			}
			else {
				//console.log('sin resultados')
				espi.style.zIndex = -1
			}
		}
		else {
			console.log('pagina detalle')
			espi.className = 'espineteTumbadoNoVisible'
		}
		*/
	}
}


function cambiarPrioridades() {
	cambios = false
	celdas = document.getElementsByTagName('TD')
	
	for (i = 0; i < celdas.length; i++) {
		celda = celdas[i]
		texto = celda.innerHTML
		prioridad = ''
		
		if (texto == 'Media') {
			prioridad = 'medium'
		}
		else if (texto == 'Baja') {
			prioridad = 'low'
		}
		else if (texto == 'Alta') {
			prioridad = 'high'
		}
		if (prioridad != '') {
			celda.innerHTML = '<span class="tc__cell-priority_' + prioridad + '" title="' + prioridad + '"></span>'
			celda.setAttribute('align', 'center')
			cambios = true
		}
	}
}


/**
function quitarMas() {
	enlaces = document.getElementsByTagName('A')
	console.log('enlaces ' + enlaces.length)
	for (i = 0; i < enlaces.length; i++) {
		enlace = enlaces[i]
		//console.log(enlace.innerHTML)
		if (enlace.innerHTML == 'Más <i class="navigation-bar__item-icon icon-angle_down"></i>') {
			opcionMenu = enlace.parentNode.parentNode
			opcionMenu.innerHTML = ''
			return
		}
	}
	setTimeout(quitarMas,1000, "JavaScript")
}
**/


function quitarOpcionDeMenuMas(texto) {
	ele = buscarElemento('li', texto)
	console.log('quitarOpcionDeMenuMas ' + ele)
	if (ele != -1) {
		li = ele.parentNode
		console.log('quitarOpcionDeMenuMas ' + li)
		li.removeChild(ele)
		console.log('quitarOpcionDeMenuMas quitado '+texto)
		return true
	}
	return false
}

function crearOpcion(texto, url, indent=true) {
	if (indent) {
		indent = '&nbsp;&nbsp;&nbsp;&nbsp;'
	}
	else {
		indent = ''
	}
	opc = document.createElement('li')
	opc.className = 'navigation-bar__item-menu-list ng-scope'
	opc.innerHTML = '<a ng-if="item.extended" class="dropdown-item template-chooser-dropdown-item navigation-wrap__dropdown-item ng-binding ng-scope" href="'+url+'" target="_blank" style="font-size: 16px !important; padding: 6px 12px !important; line-height: 26px !important;">'+indent+texto+'&nbsp;&nbsp;&nbsp;<i class="icon-pop_up ng-scope" ng-if="item.target === \'new\'"></i></a></li>'
	
	return opc
}


menu_modificado = false
function modificarMenu()
{
	console.log("MODIFICAR MENU")
	// quitar reserva de salas
	q1 = quitarOpcionDeMenuMas('Reserva de salas')
	q2 = quitarOpcionDeMenuMas('Gestión de Telefonía IP')
	q3 = quitarOpcionDeMenuMas('CRU')
	menu_modificado = q1 || q2
	
	if (menu_modificado) {
		menu = buscarElemento('a', 'Más')
		console.log('mas ' + menu)
		menu = menu.parentNode
		console.log('mas ' + menu)
		ul = menu.childNodes[1]
		//opcTelefonia = ul.childNodes[1]
		//ul.removeChild(opcTelefonia)
		
		// anadimos opciones
		opc0 = crearOpcion('CRU', 'https://cru.jccm.es', false)
		opc1 = crearOpcion('Alta usuarios', 'https://cru.jccm.es/usuarios/index.php')
		opc2 = crearOpcion('Buscar usuarios', 'https://cru.jccm.es/usuarios/buscar.php?estado=0')
		opc4 = crearOpcion('Registro de cambios', 'https://cru.jccm.es/usuarios/logs.php')
		opc5 = crearOpcion('Telefonía IP', 'https://cru.jccm.es/AXL105/')
		opc6 = crearOpcion('Listas de distribución', 'https://cru.jccm.es/usuarios/listas.php')
		opc7 = crearOpcion('OCS', 'http://ocs.jclm.es/ocsreports/', false)
		opc3 = crearOpcion('Personal docente', 'http://educacion.jccm.es/gesid/gesid/buscarUsuario/buscarUsuario.jsf', false)
		opc8 = crearOpcion('Directorio de correo', 'https://cru.jccm.es/usuarios/listin.php', false)
		
		ul.appendChild(opc0)
		ul.appendChild(opc1)
		ul.appendChild(opc2)
		ul.appendChild(opc4)
		ul.appendChild(opc5)
		ul.appendChild(opc6)
		ul.appendChild(opc7)
		ul.appendChild(opc3)
		ul.appendChild(opc8)
	}

	if (!menu_modificado) {
		setTimeout(modificarMenu, 1000, "JavaScript")
	}
}


function eliminarPanelPadre(valorAtributoDataPanelId) {
	panel  = getElementByNAV('div', 'data-panel-id', valorAtributoDataPanelId)
	if (panel != -1) {
		panelPadre = panel.parentNode
		panelAbuelo = panelPadre.parentNode
		panelAbuelo.removeChild(panelPadre)
	}
}


/**
QUITA PANELES VACIOS
MUESTRA AUTOMATICAMENTE TODO EL TEXTO DE LA INCIDENCIA/CONSULTA
**/
function modificarPantallaIncidencia() {
	titulo = getElementByNAV('div', 'class', 'title-bar__summary ng-binding ng-scope')
	if (titulo != -1)	titulo.parentNode.removeChild(titulo)
	
	boton = getElementByNI('button', 'Mostrar más')
	if (boton != -1)	boton.click()
	
	panelDetails = getElementByNAV('div', 'data-panel-id', 'detailsPanel')
	if (panelDetails != -1)	panelDetails.style.width = "100%"
	
	// quitar paneles vacios que hacen huecos a lo alto
	panelVacio = getElementByNAV('div', 'data-panel-id', 'categorization')
	if (panelVacio != -1)	panelVacio.parentNode.removeChild(panelVacio)

	eliminarPanelPadre('affectedServiceDetails')
	eliminarPanelPadre('contactNameDetails')
	eliminarPanelPadre('workOrderLocationPanel')
	eliminarPanelPadre('scheduledDatesSection')
	eliminarPanelPadre('additionalData1')
	
	// quitar la opción "mostrar menos"
	bmm = getElementByNI('button', 'Mostrar menos')
	if (bmm != -1)	bmm.parentNode.removeChild(bmm)
	
	// quitar "Para asignar el ticket..."
	panel = getElementByNAV('div', 'data-field-id', 'jccm_chr_leyenda')
	if (panel != -1)	panel.parentNode.removeChild(panel)
	panel = getElementByNAV('div', 'data-field-id', 'jccm_chr_informacion')
	if (panel != -1)	panel.parentNode.removeChild(panel)
		
	// bajar Ubicacion
	panel = getElementByNAV('div', 'data-field-id', 'site')
	if (panel != -1)	panel.style.paddingTop = '15px'
	
	// quitar Cliente
	panel = getElementByNAV('span', 'id', 'customerLabel')
	if (panel != -1)	panel.parentElement.removeChild(panel)
}


function modificarCabecerasLista() {
	elementos = document.getElementsByTagName('div')
	
	for (i = 0; i < elementos.length; i++) {
		elemento = elementos[i]
		atributo = elemento.getAttribute('ng-click')

		if (atributo == 'col.sort($event)') {
			// es fecha?
			valor = elemento.innerHTML
			if (valor == 'Nombre completo de cliente') {
				elemento.innerHTML = 'Usuario'
			}
			else if (valor == 'Usuario asignado') {
				elemento.innerHTML = 'Técnico'
			}
			else if (valor == 'Resumen') {
				elemento.innerHTML = 'Petición'
			}
			else if (valor == 'Fecha de última modificación') {
				elemento.innerHTML = 'Última modificación'
			}
		}
	}
}

/*
function modificarEnlacesLista() {
	aa = document.getElementsByTagName('a')
	
	for (i = 0; i < aa.length; i++) {
		e = aa[i]
		texto = e.innerHTML
		if (texto == 'Ver detalles') {
			al = e.getAttribute('aria-label')
			espacio = al.indexOf(' ')
			identificador = al.substring(0, espacio)
			e.setAttribute('target', identificador)
			
			img = document.createElement('img')
			img.src = chrome.runtime.getURL("./eye-icon.png")
			e.innerHTML = ''
			e.appendChild(img)
			
			td = e.parentElement
			td.setAttribute('align', 'center')
		}
	}
}
*/

function isFecha(texto) {
	return (texto.substring(2,3) == '/' && texto.substring(5,6) == '/' && texto.substring(13,14) == ':')
}


function modificarFechasLista() {
	elementos = document.getElementsByTagName('span')
	
	for (i = 0; i < elementos.length; i++) {
		elemento = elementos[i]
		atributo = elemento.getAttribute('class')

		if (atributo == 'ng-binding') {
			// es fecha?
			valor = elemento.innerHTML
			if (isFecha(valor)) {
				valor = valor.substring(0, 16)
				elemento.innerHTML = valor
			}
		}
	}
}



function modificarEstadoLista() {
	elementos = document.getElementsByTagName('span')
	
	for (i = 0; i < elementos.length; i++) {
		elemento = elementos[i]
		atributo = elemento.getAttribute('class')
		
		if (atributo == 'ng-binding') {
			valor = elemento.innerHTML
			//console.log(est)
			if      (valor == 'En curso')  elemento.style.color = '#008000' // verde
			else if (valor == 'Planificación') elemento.style.color = '#008040' // verde azulado
			else if (valor == 'Asignado')  elemento.style.color = '#804080' // violeta
			else if (valor == 'Pendiente') elemento.style.color = '#FF8000' // naranja
			else if (valor == 'Rechazado') elemento.style.color = '#C00000' 
			else if (valor == 'Cancelado') elemento.style.color = '#C00000'
			else if (valor == 'Terminado') elemento.style.color = '#000000'
			else if (valor == 'Esperando autorización') elemento.style.color = '#8080C0' // azul grisaceo
		}
	}
}



function crearSonido() {
	sonido = document.getElementById("sonido")
	if (sonido == null) {
		sonido = document.createElement("audio")
		sonido.id = "sonido"
		sonido.src = chrome.runtime.getURL("./alert.mp3")
		console.log(sonido.src)
		sonido.setAttribute("preload", "auto")
		sonido.setAttribute("controls", "none")
		sonido.style.display = "none"
		document.body.appendChild(sonido)
	}
}



function checkNuevo()  {
	elementos = document.getElementsByTagName('span')
	fecha = 0
	fechaMasReciente = ""
	fechaLS = localStorage.getItem("fecha_mas_reciente")

	for (i = 0; i < elementos.length; i++) {
		ele = elementos[i]
		if (ele.getAttribute("class") == "ng-binding") {
			fecha = ele.innerHTML
			if (isFecha(fecha)) {
				fecha = fecha.substring(6,10) + fecha.substring(3,5) + fecha.substring(0,2) + fecha.substring(11)
				//console.log("fecha " + fecha)
			
				if (fecha > fechaMasReciente) {
					fechaMasReciente = fecha
				}
			}
		}
	}
	//console.log("fecha mas reciente " + fechaMasReciente)
	if (fechaMasReciente != '') {
		localStorage.setItem("fecha_mas_reciente", fechaMasReciente)
		
		if (fechaMasReciente > fechaLS) {
			crearSonido()
			//document.getElementById("sonido").play()
			alert("CAMBIO [" + fechaMasReciente + "]  [" + fechaLS + "]")
		}
	}
}



//setTimeout(quitarEnlace,1000, "JavaScript")

setInterval(refrescar, 150000, "JavaScript")

setInterval(revisarEsquina, 1000, "JavaScript")

setInterval(modificarPantallaIncidencia, 1000, "JavaScript")

cambiarIcono()

modificarMenu()

anadirEsquina()

//setInterval(cambiarPrioridades, 1000, "JavaScript")

//setInterval(modificarEnlacesLista, 1000, "JavaScript")

setInterval(modificarCabecerasLista, 1000, "JavaScript")

//setInterval(modificarFechasLista, 1000, "JavaScript")

setInterval(modificarEstadoLista, 1000, "JavaScript")

setInterval(checkNuevo, 15000, "JavaScript")
