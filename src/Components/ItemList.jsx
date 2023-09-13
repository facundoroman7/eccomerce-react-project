import Item from "./Item"

const ItemList = ({ productos }) => {
  
    return (
      <div className="producto-tarjetas">
        
          {
            productos.map((p) =>{
              return(
                <>
                  <Item producto ={p} key={p.id}/>
                </>
              )
            })
          }
      </div> 
    )
  }
  
  export default ItemList