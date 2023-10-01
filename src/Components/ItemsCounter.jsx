// import { useState } from "react"
// import '../hoja-de-estilo/ItemsCounter.css'
// import Item from "./Item"






// const ItemsCounter = () => {

//  const [counter , setCounter] = useState(1)

//  const suma = () =>{
//   setCounter(counter + 1)
//  }

//  const resta = () =>{
//   if(counter > 0){
//     setCounter(counter - 1)
//   }
//  }


//   const onAdd = () =>{
//    console.log(Item);

//   }





//   return (
//     <>

//       <div className="Contador-de-productos"> 

//         <button onClick={resta}>-</button>
//         <p>{counter} </p>
//         <button onClick={suma}>+</button>

//       </div>

//        <button className="agregar-carrito" onClick={onAdd}>Agregar al carrito</button> 
//     </>

//   )
// }

// export default ItemsCounter


import { useState } from "react"
import '../hoja-de-estilo/ItemsCounter.css'


const ItemsCounter = ({  initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial)

  const increment = () => {
    if (cantidad) {
      setCantidad(cantidad + 1)
    }
  }

  const decrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <>

      <div className="Contador-de-productos">

        <button onClick={decrement}>-</button>
        <p>{cantidad} </p>
        <button onClick={increment}>+</button>

      </div>

      <button className="agregar-carrito" onClick={() => onAdd(cantidad)} >Agregar al carrito</button>
    </>
  )
}

export default ItemsCounter

