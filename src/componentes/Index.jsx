import React from 'react'
import Producto from './Producto'
const Index = () => {
  return (
 
    <div>
        <body>
            
      
 
<h1 className='titulo'>MANILLAS DONDE RAUL</h1>

 

  <label for="menu"><h3>
    Selecciona la clase de manilla:</h3></label>
<select id="menu" className='opt'>
<option value="opcion4">Cuero</option>
<option value="opcion1">Cuerda</option>
</select>

  <label for="menu"><h3>
    Selecciona el dije:</h3></label>
<select id="menu" className='opt'>
<option value="opcion4">Martillo</option>
<option value="opcion1">Ancla</option>
</select>
  <label for="menu"><h3>
    Selecciona el tipo de manilla:</h3></label>
<select id="menu" className='opt'>
<option value="opcion4">Oro</option>
<option value="opcion1">Oro rosado</option>
<option value="opcion1">Plata</option>
<option value="opcion1">Niquel</option>
</select>

<h2 for="numero">Ingrese numero de manillas a comprar</h2>
  <input type="number" id="numero" name="numero"/>
  <label for="menu"><h3>
    Selecciona la moneda de compra:</h3></label>
<select id="menu" className='opt'>
<option value="opcion4">Peso</option>
<option value="opcion1">Dolar</option>
</select>
  

</body>
  
 
    </div>
  )
}

export default Index