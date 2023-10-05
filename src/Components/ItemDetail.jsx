import '../hoja-de-estilo/Item-Detail.css'
import '../hoja-de-estilo/cart.css'
import { Card, Stack, Text, Heading, Divider, CardBody, CardFooter, Button, Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemsCounter from './ItemsCounter'
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'





const ItemDetail = ({ producto }) => {

    const { agregarAlCart } = useContext(CartContext)

    const [irAlCart, setIrAlCart] = useState(false)


    const onAdd = (cantidad) => {
        setIrAlCart(true);
        if (typeof agregarAlCart === 'function') {
            agregarAlCart(producto, cantidad);
        }
    };

    return (
        <div className='detail-container'>


            <div key={producto.id}>
                <Card maxW='sm'>
                    <CardBody>
                        <Image className='imagen'
                            src={producto.imagen}
                            alt='Green double couch with wooden legs'

                        />

                        <Stack mt='6' spacing='3'>
                            <Heading size='md'> {producto.nombre} </Heading>
                            <Text>
                                {producto.descripcion}
                            </Text>
                            <Text>
                                {producto.category}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                {producto.precio}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter gap='15'>

                        {
                            irAlCart ? <Link to='/cart'> <Button colorScheme="blue" marginLeft='80px'>Terminar Compra</Button></Link> : <ItemsCounter initial={1} onAdd={onAdd} />
                        }


                    </CardFooter>
                </Card>

            </div>



        </div>
    )
}

export default ItemDetail
