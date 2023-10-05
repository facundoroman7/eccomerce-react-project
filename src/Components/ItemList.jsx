import Item from "./Item"
import Loader from "./Loader"

const ItemList = ({ productos }) => {

  const loading = []
  
    return (
      <div className="producto-tarjetas">
         {
        loading ? <Item productos={productos}/> : <Loader/>
      }
          
      </div> 
    )
}

export default ItemList