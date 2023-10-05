import ItemList from "./ItemList"
import '../hoja-de-estilo/ItemListContainer.css'
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useState, useEffect } from "react"
import Loader from "./Loader"


const ItemListContainer = ( {greting} ) => {
  const [productos, setProductos] = useState([])

  const { categoria } = useParams()

  useEffect(()=>{
    const db = getFirestore()

    const itemsCollection = collection(db, "libros")

    getDocs(itemsCollection).then((snapshot)=>   {
    const docs = snapshot.docs.map((doc) => {
      return {...doc.data(), id: doc.id}; 
    });
    setProductos(docs)
     })
  }, [])

  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)

  return (
    <>

    <div className="titulo-principal">
      <h1> {greting} </h1>
      <p>Explora las páginas que inspiran, aprenden y despiertan nuevas pasiones en cada lectura.</p>
    </div>

    {
      productos.length === 0 ? <Loader/> : 
      categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos}/> 

    }

    </>
    );
};


export default ItemListContainer
