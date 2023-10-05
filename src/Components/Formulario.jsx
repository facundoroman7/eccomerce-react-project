
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import '../hoja-de-estilo/formulario.css'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";


const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("")
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const handelSubmit = (e) => {
    e.preventDefault();
    nombre === ""
      ? alert("Campo de nombre Vacio")
      : alert(`Gracias por su compra y que disfrutes del libro ${nombre}`);
    email === ""
      ? alert("Ingrese correo electronico para comprar")
      : alert(`Fue enviado a su correo electronico ${email}`);
    celular === ""
      ? alert("Ingrese el numero del celular para comprar")
      : alert(`Le llegara un mensaje. Gracias por la compra ${celular}`);

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));

  };

  const order = {
    nombre,
    email,
    celular
  };

  const ordersCollection = collection(db, "orden");

  return (
    <>
      

        <div className="formulario-items">
          <form onSubmit={handelSubmit}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                type="text"
                onChange={(e) => setNombre(e.target.value)}
              />

              <FormLabel>Celular</FormLabel>
              <Input
                id="celular"
                name="celular"
                placeholder="Celular"
                type="number"
                onChange={(e) => setCelular(e.target.value)}
              />

              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                color="blue.600"
                className="btnComprar"
                type="submit"
                padding="20px"
                margin="20px"
              >
                Realizar Compra
              </Button>
            </FormControl>
          </form>

          <div className="form-id"> Su ID:  {orderId}</div>
        </div>
     
    </>
  );
};

export default Formulario;