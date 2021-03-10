
let arreglo = new Array();
let tarea;
let dias;
let arreglolisto = new Array();

function Tarea(tarea,dias) { //set
    this.tarea = tarea;
    this.dias = dias;
  }

function yaagregado (tarea) {
  let i = 0;
  let encontrado = false ;
  while(encontrado == false && i < arreglo.length) {
    if (arreglo[i].tarea == tarea)
    {
      encontrado = true;
    }
    else
    {
      i++;
    }
  }
  return encontrado;
}

function Cargartareas() {
    tarea = document.getElementById('texttarea').value;
    dias = document.getElementById('textdias').value;
  }

function  Cargartarea() {
    Cargartareas();
    if (tarea != '' && dias != '')
    {
        if(isNaN(dias) === false)
        {
            if (yaagregado(tarea) === false)
            {
                const t = new Tarea(tarea, dias);
                arreglo.push(t);
                refrescartabla();
            }
            else 
                {alert('ya se encuentra cargada')}
        }
        else
        {
        alert('hay caracteres que no son numeros');
        document.getElementById('textdias').value = '';
        }
    }
    else
    {alert('hay un campo vacio')}
}

function borrar(i) {
    arreglo.splice(i, 1);
    refrescartabla();
}

function lista(i) {
    const t = new Tarea(arreglo[i].tarea, arreglo[i].dias);
    arreglolisto.push(t);
    arreglo.splice(i, 1)
    refrescartabla();
}
function refrescartabla() {
  let contador;
  document.getElementById('listadotarea').innerHTML = '';
  for (contador=0; contador<arreglo.length; contador++)
  {
    let parrafo = document.createElement('li');
    const texto = document.createTextNode(arreglo[contador].tarea + ' - ' + arreglo[contador].dias);
    parrafo.setAttribute('class', 'txtlista');
    
    let divTexto = document.createElement('div');
    divTexto.setAttribute('class', 'divli');
    parrafo.appendChild(divTexto);
    divTexto.appendChild(texto);
    document.getElementById('listadotarea').appendChild(parrafo);
    
    let divBotones = document.createElement('div');
    divBotones.setAttribute('class', 'divbotones');
    parrafo.appendChild(divBotones);
    //parrafo
    let boton = document.createElement('Button');
    const txtCerrar = document.createTextNode('X');
    boton.className = 'borrar';
    boton.setAttribute('id', 'btborrar' + contador);

    boton.onclick = function(i)
    {
        arreglo.splice(i, 1);
        refrescartabla();
    };//operacion borrar

    boton.appendChild(txtCerrar);
    divBotones.appendChild(boton);
  
    //boton de borrar
    boton = document.createElement('Button');
    const txtTareaLista = document.createTextNode('Tarea lista');
    boton.setAttribute('id', 'btlisto' + contador);
    boton.setAttribute('name' , contador);
    boton.onclick = function(i)
    {
        const t = (arreglo[event.currentTarget.name].tarea + '  -  '+ arreglo[event.currentTarget.name].dias);
        arreglolisto.push(t);
        arreglo.splice(event.currentTarget.name, 1);
        refrescartabla();
        refrescartlista()
    };//operacion tarea lista
    boton.className = 'listo';
    boton.appendChild(txtTareaLista);
    divBotones.appendChild(boton);
    //boton de listo
  }
}

function refrescartlista() {
    document.getElementById('tlistas').innerHTML = '';
    for (i=0; i<arreglolisto.length; i++) {
        let parrafo = document.createElement('li');
        const texto = document.createTextNode(arreglolisto[i]);
        parrafo.appendChild(texto);
        document.getElementById('tlistas').appendChild(parrafo);
    }
}