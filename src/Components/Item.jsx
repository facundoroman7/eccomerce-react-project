
import { Card, Image, Stack, Text, Divider, Heading, ButtonGroup, Button, CardBody,  CardFooter } from '@chakra-ui/react'
import '../hoja-de-estilo/cart.css'
import { Link } from 'react-router-dom';

const Item = ({ productos }) => {
  return (
    <>
      {productos.map((p) => (
        
        <Card key={p.id} maxW='sm'>
          <CardBody>
            <Image className='imagen'
              src={p.imagen}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{p.nombre}</Heading>
              <Text>{p.description}</Text>
              <Text color='black' fontSize='35px' display='flex' justifyContent='center'>
                ${p.precio}
              </Text>
              <Text color='blue.600' fontSize='2xl' display='flex' justifyContent='center'>
                Stock: {p.stock}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' color='blue.600' width='350px'display='flex' >
                <Link to={`/item/${p.id}`}>detalle de los Libros</Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Item;
