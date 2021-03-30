
var enlace_quitado = false
var icono_quitado = false
var recien_cargado = true


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


function quitarEnlace() {

	if (!enlace_quitado) {
		a = getElementByNI('a', 'Ir directamente a contenido principal')
		
		if (a != -1) {
			a.innerHTML = ""
			enlace_quitado = true
			console.log("quitado")
		}
	}

	if (!enlace_quitado) {
		console.log('no quitado')
		setTimeout(quitarEnlace,1000, "JavaScript")
	}
}


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
	console.log('iconillo')
	console.log(a)
	if (a != -1) {
		a.href = 'https://raw.githubusercontent.com/gallegux/sigo/main/icon16.png'
		console.log("icono cambiado")
	}
}


function crearLink(nombre, url) {
	a = document.createElement('a')
	a.innerHTML = nombre
	a.href = url
	a.target = '_blank'
	
	return a
}


function anadirCRU() {
	opts = [ 
		{nombre: 'Alta&nbsp;usuarios', url: 'https://cru.jccm.es/usuarios/index.php'} , 
		{nombre: 'Buscar&nbsp;usuarios', url: 'https://cru.jccm.es/usuarios/buscar.php?estado=0'} , 
		{nombre: 'Personal&nbsp;docente', url: 'http://educacion.jccm.es/gesid/gesid/buscarUsuario/buscarUsuario.jsf'} , 
		{nombre: 'Registro&nbsp;de&nbsp;cambios', url: 'https://cru.jccm.es/usuarios/logs.php'} , 
		{nombre: 'Telefonía&nbsp;IP', url: 'https://cru.jccm.es/AXL105/'} , 
		{nombre: 'Listas&nbsp;de&nbsp;distribución', url: 'https://cru.jccm.es/usuarios/listas.php'},
		{nombre: 'OCS', url: 'http://ocs.jclm.es/ocsreports/'}
	]

	tabla = document.createElement('table')
	tabla.style = 'position: absolute; bottom: 0px; width: 100%; height: 35px !important; background-color: #002855;'
	
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

/*
function anadirEsquina() {
	x = document.createElement('img')
	x.src = 'chrome-extension:///espinete_tumbado.png'
	x.style = 'position: absolute; bottom: 0; left: 0; z-index: -10;'
	
	document.body.appendChild(x)
}
*/

setTimeout(quitarEnlace,1000, "JavaScript")

setInterval(refrescar, 55000, "JavaScript")

cambiarIcono()

anadirCRU()

//anadirEsquina()
