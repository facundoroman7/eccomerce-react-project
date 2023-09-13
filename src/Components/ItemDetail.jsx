import { Card, Stack, Text, Heading, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemsCounter from './ItemsCounter'

const ItemDetail = ({ productos }) => {

    const {id} = useParams()

    const filerProduct = productos.filter((producto) => producto.id == id)

    return (
        <div>
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
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        comprar
                                    </Button>
                                    <ItemsCounter />
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </div>
                )
            })}

        </div>
    )
}

export default  ItemDetail