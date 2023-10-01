import { useState } from "react"


const Form = () => {

const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")

const handleSubmit = (e) =>{
    e.preventDefault()
    nombre === "" ? alert("Nombre vacio") : alert(`bienvenido ${nombre}`)
    email === "" ? alert("email vacio") : alert(`Registrado como: ${email}`)
    console.log("informacion valida");
}


  return (
    <div>
        
        <h1>Formulario</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" onChange={(e) => setNombre (e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail (e.target.value)} />
            <button type="submit">enviar</button>
        </form>
    </div>
  )
}

export default Form