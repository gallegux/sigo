
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
	if (a != -1) {
		a.href = 'sigo.png'
		console.log("icono cambiado")
	}
}

/*
function anadirEsquina() {
	x = document.createElement('img')
	x.src = 'https://raw.githubusercontent.com/gallegux/croack/main/espinete_tumbado.png'
	x.style = 'position: absolute; bottom: 0; left: 0; z-index: -10;'
	
	document.body.appendChild(x)
}
*/

setTimeout(quitarEnlace,1000, "JavaScript")

setInterval(refrescar, 55000, "JavaScript")

cambiarIcono()

//anadirEsquina()