import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
 
  const [cart, setCart] = useState([]);

  const vaciarCarrito = () => setCart([]);

  const elCarrito = (id) => {
    return cart.find (producto => producto.id === id) ? true : false
  }

  const sacarDelCart = (id) => setCart(cart.filter(producto => producto.id !== id))

  const agregarAlCart = (item, cantidad) => {
    if(elCarrito(item.id)){
      setCart(cart.map(producto => {return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad} : producto}))
    }else{
        setCart([...cart, {...item, cantidad}])
    }
  }



const precioTotal = () => {
  return cart.reduce ((prev, act) => prev + act.cantidad * act.precio, 0)
}

const Totalesproductos = () =>
  cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)





  return (
    <CartContext.Provider value={{vaciarCarrito, elCarrito, sacarDelCart, agregarAlCart, precioTotal, Totalesproductos, cart}}>
      {children}
    </CartContext.Provider>
  );
};


