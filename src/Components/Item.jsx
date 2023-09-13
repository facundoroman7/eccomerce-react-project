import { Card, Image, Stack, Text, Divider, Heading, ButtonGroup, Button, CardBody,  CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Item( {producto}) {

  console.log(producto);
  return (
    <div key={producto.id}>
        <Card maxW='sm'>
        <CardBody>
          <Image
            src= {producto.image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'> {producto.nombre}   </Heading>
            <Text>
              {producto.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${producto.precio}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {producto.stock}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              <Link to={`/item/${producto.id}`}> 
                detalle
              </Link>
            </Button>

          </ButtonGroup>
        </CardFooter>
        
      </Card>
    </div>
  )
}

export default Item