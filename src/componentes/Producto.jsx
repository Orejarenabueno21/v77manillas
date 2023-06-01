import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'




const Producto = () => {
    const [dijes,setDijes] = useState([]);
    const [materialSeleccionado, setMaterialSeleccionado] = useState('');
    const [dijeSeleccionado, setDijeSeleccionado] = useState('');
    const [tipoSeleccionado, setTipoSeleccionado] = useState('');
    const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState('');
    const [pagoSelec, setPagoSelec] = useState('');
    const [opcioncp, setOpcioncp] = useState('');


        useEffect(() => {
            const obtenerDijes = async() => {
                try{ await onSnapshot(collection(db, 'manillas'), (query) =>{
                        setDijes(query.docs.map((doc) => ({...doc.data(), id:doc.id})))
                    })
                }catch(e){
                console.log(e)
                }
            }
            obtenerDijes();
            console.log(obtenerDijes)
         }, [])

         


         useEffect(() => {
            const opciones = `${materialSeleccionado} ${dijeSeleccionado} ${tipoSeleccionado} ${pagoSelec}`;
            setOpcionesSeleccionadas(opciones);
          }, [materialSeleccionado, dijeSeleccionado, tipoSeleccionado, pagoSelec]);

          useEffect(() => {
            const opc = `${materialSeleccionado} ${tipoSeleccionado}`;
            setOpcioncp(opc);
          }, [materialSeleccionado, tipoSeleccionado]);

 return (
    <div>
<h1 className='titulo'>MANILLAS DONDE RAUL</h1>
<hr/> 

<label for="menu"><h3>
    Selecciona la clase de manilla:</h3></label>
    <select id="mate" className='opt' onChange={(e) => setMaterialSeleccionado(e.target.value)}>
        <option value="cue">Cuero</option>
<option value="k">Cuerda</option>
</select>

 <label for="menu"><h3>
    Selecciona el dije:</h3></label>
<select id="dije" className='opt' onChange={(e) => setDijeSeleccionado(e.target.value)}>
<option value="mar">Martillo</option>
<option value="a">Ancla</option>
</select>

  <label for="menu"><h3>
    Selecciona el tipo de manilla:</h3></label>
    <select id="dije" className='opt' onChange={(e) => setOpcionSeleccionada(e.target.value)}>
<option value="oro">Oro</option>
<option value="r">Oro rosado</option>
<option value="p">Plata</option>
<option value="n">Niquel</option>
</select>

            <hr/>
            <label for="pago">Metodo de pago:</label>
            <select id="pago" className='opt' onChange={(e) => setPagoSelec(e.target.value)}>
            <option value="dol">Dolares</option>
            <option value="p">Pesos</option>
            </select>

            <ul className="list-group">
                    {  
                        dijes.map(item =>(
                            <div className="list-group-item" key={item.id}>
                                <h4>item.id Firebase</h4>
                                {item.id}
                                <h1 className="lead">{item[opcionesSeleccionadas]}</h1>
                            </div>
                        ))   
                    }        
            </ul> 
 
                
 </div>
 )

}




export default Producto