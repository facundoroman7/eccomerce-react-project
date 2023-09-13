import ItemList from "./ItemList"
import '../hoja-de-estilo/ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const { categoria } = useParams()
 

    const productos = [

      {id:1 , nombre: "Harry Potter y la piedra filosofal" , precio: 1000,  descripcion:"descripcion del libro 1" , stock: 5, categoria: "ficcion"},
      {id:2 , nombre: "El Diario de Los Hábitos - james Cl " , precio: 12000,  descripcion:"descripcion del libro 2" , stock: 15, categoria: "ficcion"},
      {id:3 , nombre: "Hábitos Atómicos -James Cl" , precio: 10500,  descripcion:"descripcion del libro 3" , stock: 25, categoria: "Auto-desarrollo"},
      {id:4 , nombre: "El poder de creer en ti" , precio: 10030,  descripcion:"descripcion del libro 4" , stock: 54, categoria: "Auto-desarrollo"},
      {id:5 , nombre: "El secreto de la paz personal" , precio: 14000,  descripcion:"descripcion del libro 5" , stock: 55, categoria: "motivacion"},
      {id:6 , nombre: "El Club de las 5 de la mañana [The 5 AM Club]" , precio: 10600,  descripcion:"descripcion del libro 6" , stock: 56, categoria: "motivacion"},

    ]

    const getProductos = new Promise ((resolve, reject) =>{
      if (getProductos.length > 0) {
        setTimeout(() =>{
          resolve(productos)
        }, 2000)
      }else{
        reject(new Error ("no hay nada de datos"))
      }
    })

    getProductos
    .then((res) =>{
      console.log(res);
    })
    .catch((error) =>{
      console.log(error);
    })

    const filteredProducts = productos.filter((producto) => producto.categoria === categoria)

  return (
    <>
      { categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} /> }  
    </>
    
  )
}


export default ItemListContainer