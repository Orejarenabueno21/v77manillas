import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'




const Index = () => {

 const [dijes,setDijes] = useState([]);

    useEffect(() => {

    const obtenerDijes = async() => {

    try{
     await onSnapshot(collection(db, 'manillas'), (query) =>{

    setDijes(query.docs.map((doc) => ({...doc.data(), id:doc.id})))
    })

     }catch(e){
     console.log(e)
    }

     }

    obtenerDijes();
    console.log(obtenerDijes)

     }, [])

  return (
    <div>
            <ul className="list-group">
                    {  
                        dijes.map(item =>(
                            <div className="list-group-item" key={item.id}>
                                <h1 className="lead">{item.Material}-{item.tipo}</h1>
                            </div>
                        ))   
                    }        
                </ul>


                {/* 
 <label for="menu"><h3>
    Selecciona la clase de manilla:</h3></label>
<select id="menu" className='opt'>
<option value="opcion4">Cuero</option>
<option value="opcion1">Cuerda</option>
</select>

 <label for="menu"><h3>
    Selecciona el dije:</h3></label>
<select id="dije" className='opt' onChange={(e) => setOpcionSeleccionada(e.target.value)}>
<option value="Material">Martillo</option>
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
<select id="menu moneda" className='opt'>
<option value="opcion4">Peso</option>
<option value="opcion1">Dolar</option>
</select> */}


 </div>
 )

}




export default Index