function cargarEntrada(entrada){ //ENTRADA ES EL THIS
	console.log('ENTRA');
	let idEntrada = entrada.id;

	let xhr = new XMLHttpRequest(),
	url = 'http://localhost/PHII/practica2/rest/entrada/';
	
	console.log('URL: ' + url + idEntrada);

	xhr.open('GET', url + idEntrada, true);

	xhr.onload = function(){
			let datosEntrada = xhr.responseText;
			console.log(datosEntrada)
			//frm.parentNode.querySelector('article>p').innerHTML = datosEntrada;
		};

	//Se debe de poner vacio
		xhr.send();



	return false;
}


// Nueva funcion de prueba para mostrar las entradas cogido del ejemplo_11 (probando el primer ejemplo)
function mostrarEntradas(frm){
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PHII/practica2/rest/entrada/',
		section = frm.parentNode.parentNode;

	url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value; 

	xhr.open('GET', url, true);

	xhr.onload = function(){
		let v = JSON.parse(xhr.responseText);
		if(v.RESULTADO == 'ok'){
			let html = '';

			for(let i=0; i<v.FILAS.length; i++){
				let e = v.FILAS[i],

					foto = 'http://localhost/PHII/practica2/fotos/' + e.fichero;

				html += '<article>';
				html += 	'<h3><a href="entrada.html">' + e.nombre + '</a></h3>';
				html += 	'<figure>';
				html += 		'<img src="' + foto + '" alt="' + e.descripcion_foto + '">';
				html += 		'<figcaption>' + e.descripcion + '<footer><a>Ver más</a></footer></figcaption>';
				html += 	'</figure>';
				html += 	'<footer>';
				html += 	'<ul>';
				html += 		'<li><span aria-hidden="true" class="icon-comment"></span>' + e.ncomentarios + '</li>';
				html += 		'<li><span aria-hidden="true" class="icon-picture"></span>' + e.nfotos + '</li>';
				html += 		'<li><span aria-hidden="true" class="icon-calendar"></span><time datetime="'+ e.fecha + '">' + e.fecha + '</time></li>';
				html += 		'<li><span aria-hidden="true" class="icon-user"></span>' + e.login + '</li>';
				html += 	'</ul>';
				html += 	'</footer>';
				html += '</article>';

			}//for(let i=0; i<v.FILAS.length; i++)
			section.querySelector('h2+div').innerHTML = html;
		}
	}

	xhr.send();

	return false;
}

function mostrarComentarios(frm){
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PHII/practica2/rest/entrada/',
		section = frm.parentNode.parentNode;

	// url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value; 

	xhr.open('GET', url, true);

	xhr.onload = function(){
		let v = JSON.parse(xhr.responseText);
		if(v.RESULTADO == 'ok'){
			let html = '';

			for(let i=0; i<v.FILAS.length; i++){
				let e = v.FILAS[i],

					foto = 'http://localhost/PHII/practica2/imgs/user1.jpg/' + e.fichero;

				html += '<article>';
				html += 	'<h3><a href="entrada.html">' + e.nombre + '</a></h3>';
				html += 	'<figure>';
				html += 		'<img src="' + foto + '" alt="' + e.descripcion_foto + '">';
				html += 		'<figcaption>' + e.descripcion + '<footer><a>Ver más</a></footer></figcaption>';
				html += 	'</figure>';
				html += 	'<footer>';
				html += 	'<ul>';
				html += 		'<li><span aria-hidden="true" class="icon-comment"></span>' + e.ncomentarios + '</li>';
				html += 		'<li><span aria-hidden="true" class="icon-picture"></span>' + e.nfotos + '</li>';
				html += 		'<li><span aria-hidden="true" class="icon-calendar"></span><time datetime="'+ e.fecha + '">' + e.fecha + '</time></li>';
				html += 		'<li><span aria-hidden="true" class="icon-user"></span>' + e.login + '</li>';
				html += 	'</ul>';
				html += 	'</footer>';
				html += '</article>';

			}//for(let i=0; i<v.FILAS.length; i++)
			section.querySelector('h2+section').innerHTML = html;
		}
	}

	xhr.send();

	return false;
}