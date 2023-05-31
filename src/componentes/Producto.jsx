import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'




const Producto = () => {

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

 </div>
 )

}




export default Producto