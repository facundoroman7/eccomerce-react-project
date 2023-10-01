import '../hoja-de-estilo/Item-Detail.css'
import { Card, Stack, Text, Heading, Divider, CardBody, CardFooter } from '@chakra-ui/react'
import {  Link, useParams } from 'react-router-dom'
import ItemsCounter from './ItemsCounter'
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'





const ItemDetail = ({ productos}) => {

    const [cantidadAdd,  setCantidadAdedd] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) =>{
    setCantidadAdedd(cantidad)

           const productos = {
            // id, nombre, precio
           }

           addItem(productos, cantidad)
    
        }



    const {id} = useParams()

    const filerProduct = productos.filter((producto) => producto.id == id)


   

    return (
        <div className='detail-container'>
            {filerProduct.map((p) => {

                return (
                    <div key={p.id}>
                        <Card maxW='sm'>
                            <CardBody>
                                
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'> {p.nombre} </Heading>
                                    <Text>
                                        {p.descripcion}
                                    </Text>
                                    <Text>
                                        {p.category}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        {p.precio}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter gap='15'>
                                {
                                    cantidadAdd > 0 ? (
                                        <Link to={'/cart'}>terminar compras</Link>
                                    ) : (

                                        <ItemsCounter initial={1} onAdd= {handleOnAdd} />
                                    )
                                }

                            </CardFooter>
                        </Card>
                           
                    </div>
                )
            })}

        </div>
    )
}

export default  ItemDetail





// import '../hoja-de-estilo/Item-Detail.css';
// import { Card, Stack, Text, Heading, Divider, CardBody, CardFooter } from '@chakra-ui/react';
// import { useParams } from 'react-router-dom';
// import ItemsCounter from './ItemsCounter';

// const ItemDetail = ({ productos, addItem }) => {
//   const { id } = useParams();
//   const filteredProduct = productos.find((producto) => producto.id === Number(id));

//   const handleAddToCart = (quantity) => {
//     const item = {
//       id: filteredProduct.id,
//       nombre: filteredProduct.nombre,
//       precio: filteredProduct.precio,
//       cantidad: quantity,
//     };
//     addItem(item);
//   };

//   return (
//     <div className='detail-container'>
//       <Card maxW='sm'>
//         <CardBody>
//           <Stack mt='6' spacing='3'>
//             <Heading size='md'>{filteredProduct.nombre}</Heading>
//             <Text>{filteredProduct.descripcion}</Text>
//             <Text>{filteredProduct.categoria}</Text>
//             <Text color='blue.600' fontSize='2xl'>
//               {filteredProduct.precio}
//             </Text>
//           </Stack>
//         </CardBody>
//         <Divider />
//         <CardFooter gap='15'>
//           <ItemsCounter onAdd={handleAddToCart} />
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default ItemDetail;
