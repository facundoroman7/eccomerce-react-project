import { useState } from "react"
import '../hoja-de-estilo/ItemsCounter.css'


const ItemsCounter = () => {

 const [counter , setCounter] = useState(0)

 const suma = () =>{
  setCounter(counter + 1)
 }

 const resta = () =>{
  if(counter > 0){
    setCounter(counter - 1)
  }
 }


  return (
    <div className="Contador-de-productos"> 
        
        <button onClick={resta}>-</button>
        <p>{counter} </p>
        <button onClick={suma}>+</button>

    </div>
  )
}

export default ItemsCounter