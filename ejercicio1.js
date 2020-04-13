function Cuenta(titular,cantidad) { //set
  this.titular = titular;
  this.cantidad = cantidad;
}
var arreglo = new Array();
function yaagregado (titular)
{
  var i = 0;
  var encontrado = false ;
  while(encontrado == false && i < arreglo.length)
  {
    if (arreglo[i].titular == titular)
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

function buscar(titular)
{
  for (let i=0;arreglo.length;i++)
  {
    if (arreglo[i].titular == titular)
    {
      return i;
    }
  }
  alert("no se encontro el titular");
} 

function crear()
{
    var titular = document.getElementById("titular").value;
    var cantidad = document.getElementById("cantidad").value;
    
    if (titular !="" && cantidad != "")
    {
      if(isNaN(cantidad) == false)
      {
        if (yaagregado(titular) == false)
        {
          var cuenta = new Cuenta(titular,cantidad);
          arreglo.push(cuenta);
          refrescartabla();
        }
        else 
          {alert("ya se encuentra cargado")}
      }
      else
      {
        alert("hay caracteres que no son numeros");
        document.getElementById("cantidad").value = "";
      }
        
    }
    else
    {alert("hay un campo vacio")}
}

function depositar()
{
  var titular = document.getElementById("titular").value;
  var cantidad = document.getElementById("cantidad").value;
    if (titular !="" && cantidad != "")
      {
        if(isNaN(cantidad) == false)
        {
          var posicion = buscar(titular);
          deposito(cantidad,posicion);
          refrescartabla()
        }
        else
        {
          alert("hay caracteres que no son numeros");
          document.getElementById("cantidad").value = "";
        }
      }
      else
      {
          alert("hay un campo vacio");
      }
}

function retirar()
{
  var titular = document.getElementById("titular").value;
  var cantidad = document.getElementById("cantidad").value;
    if (titular !="" && cantidad != "")
      {
        if(isNaN(cantidad) == false)
        {
          var posicion = buscar(titular);
          extraccion(cantidad,posicion);
          refrescartabla()
        }
        else
        {
          alert("hay caracteres que no son numeros");
         document.getElementById("cantidad").value = "";
        }
      }
      else
      {
          alert("hay un campo vacio");
      }


}
function extraccion(cantidad,posicion)
{
  arreglo[posicion].cantidad = ( parseInt(arreglo[posicion].cantidad) - parseInt(cantidad) );

}

function deposito(cantidad,posicion)
{
  arreglo[posicion].cantidad = ( parseInt(arreglo[posicion].cantidad) + parseInt(cantidad) );

}




function refrescartabla()
{
  document.getElementById("titu").innerHTML="Titulares";
  document.getElementById("cant").innerHTML="Monto";
  var i;
  for (i=0; i<arreglo.length; i++)
  {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(arreglo[i].titular);
    parrafo.appendChild(texto);
    document.getElementById("titu").appendChild(parrafo);

    var parrafo1 = document.createElement('p');
    var texto1 = document.createTextNode(arreglo[i].cantidad);
    parrafo1.setAttribute("id", "c"+ i);
    parrafo1.appendChild(texto1);
    document.getElementById("cant").appendChild(parrafo1);
    
    if(parseInt(arreglo[i].cantidad)>0)
    {
      document.getElementById("c"+i).style.color = "green";
    }
    else if (parseInt(arreglo[i].cantidad)<0)
    {
      document.getElementById("c"+i).style.color = "red";
    }

  }
// Create a <li> node
// Create a text node
// Append the text to <li>
// Append <li> to <ul> with id="myList" 

} 
//  var i;
//  for (i=0; i<arreglo.length; i++)
//  {
//    var table = document.createElement("table");
//    table.setAttribute("id", "tabla"+i);
//    table.setAttribute("class", "tabla");
//    var row = table.insertRow(-1);
//    var firstNameCell = row.insertCell(-1);
//    firstNameCell.appendChild(document.createTextNode(arreglo[i].titular));
//    var lastNameCell = row.insertCell(-1);
//    lastNameCell.appendChild(document.createTextNode(arreglo[i].cantidad));
//  }
//  document.body.appendChild(table);

//document.writeIn("<div class='titu'> titular:  " + arreglo[i].titular + "  </div><div class='cant'> cantidad:  " + arreglo[i].cantidad + "  </div>")