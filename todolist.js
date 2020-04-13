function Tarea(tarea,dias) { //set
    this.tarea = tarea;
    this.dias = dias;
  }

var arreglo = new Array();
var tarea;
var dias;
var arreglolisto = new Array();

function yaagregado (tarea)
{
  var i = 0;
  var encontrado = false ;
  while(encontrado == false && i < arreglo.length)
  {
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

function Cargartareas()
  {
    tarea = document.getElementById("texttarea").value;
    dias = document.getElementById("textdias").value;
  }

function  Cargartarea()
{
    Cargartareas();
    if (tarea !="" && dias != "")
    {
        if(isNaN(dias) == false)
        {
            if (yaagregado(tarea) == false)
            {
                var t = new Tarea(tarea,dias);
                arreglo.push(t);
                refrescartabla();
            }
            else 
                {alert("ya se encuentra cargada")}
        }
        else
        {
        alert("hay caracteres que no son numeros");
        document.getElementById("textdias").value = "";
        }
    }
    else
    {alert("hay un campo vacio")}
}

function borrar(i)
{
    arreglo.splice(i,1);
    refrescartabla();
}
function lista(i)
{
    var t = new Tarea(arreglo[i].tarea,arreglo[i].dias);
    arreglolisto.push(t);
    arreglo.splice(i,1)
    refrescartabla();
}
function refrescartabla()
{
  var i;
  var j;
  document.getElementById("listadotarea").innerHTML = "";
  for (i=0; i<arreglo.length; i++)
  {
    var parrafo = document.createElement('li');
    var texto = document.createTextNode(arreglo[i].tarea + " - "+ arreglo[i].dias);
    parrafo.setAttribute("class","txtlista");
    
    var divTexto = document.createElement('div');
    divTexto.setAttribute("class","divli");
    parrafo.appendChild(divTexto);
    divTexto.appendChild(texto);
    document.getElementById("listadotarea").appendChild(parrafo);
    
    var divBotones = document.createElement('div');
    divBotones.setAttribute("class","divbotones");
    parrafo.appendChild(divBotones);
    //parrafo
    var boton = document.createElement("Button");
    var txt = document.createTextNode("X");
    boton.className = "borrar";
    boton.setAttribute("id","btborrar"+i);

    boton.onclick = function(i)
    {
        arreglo.splice(i,1);
        refrescartabla();
    };//operacion borrar

    boton.appendChild(txt);
    divBotones.appendChild(boton);
  
    //boton de borrar
    var boton = document.createElement("Button");
    var txt = document.createTextNode("Tarea lista");
    boton.setAttribute("id","btlisto"+i);
    boton.setAttribute("name",i);
    boton.onclick = function(i)
    {
        var t = (arreglo[event.currentTarget.name].tarea + '  -  '+ arreglo[event.currentTarget.name].dias);
        arreglolisto.push(t);
        arreglo.splice(event.currentTarget.name,1);
        refrescartabla();
        refrescartlista()
    };//operacion tarea lista
    boton.className = "listo";
    boton.appendChild(txt);
    divBotones.appendChild(boton);
    //boton de listo
  }
}

function refrescartlista()
{
    document.getElementById("tlistas").innerHTML = "";
    for (i=0; i<arreglolisto.length; i++)
    {
        var parrafo = document.createElement('li');
        var texto = document.createTextNode(arreglolisto[i]);
        parrafo.appendChild(texto);
        document.getElementById("tlistas").appendChild(parrafo);
    }
}
