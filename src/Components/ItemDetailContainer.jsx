import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () => {

  const productos = [

    {id:1 , nombre: "Harry potter" , precio: 10000,  descripcion:"Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería." , stock: 5, categoria: "ficcion"},

    {id:2 , nombre: "Habitos atomicos" , precio: 8000,  descripcion:"HÁBITOS ATÓMICOS parte de una simple pero poderosa pregunta: ¿Cómo podemos vivir mejor? Sabemos que unos buenos hábitos nos permiten mejorar significativamente nuestra vida, pero con frecuencia nos desviamos del camino: dejamos de hacer ejercicio, comemos mal, dormimos poco, despilfarramos. " , stock: 3, categoria: "ficcion"},
    
    {id:3 , nombre: "Habitos diarios" , precio: 5000,  descripcion:"HÁBITOS diarios parte de una simple pero poderosa pregunta: ¿Cómo podemos vivir mejor? Sabemos que unos buenos hábitos nos permiten mejorar significativamente nuestra vida, pero con frecuencia nos desviamos del camino: dejamos de hacer ejercicio, comemos mal, dormimos poco, despilfarramos. " , stock: 8, categoria: "Auto-desarrollo"},

    {id:4 , nombre: "El poder de creer en ti" , precio: 14000,  descripcion:"9 pasos para aumentar tu autoestima, vencer tus miedos y aprender a quererte (Tu mejor versión)" , stock: 14, categoria: "Auto-desarrollo"},

    {id:5 , nombre: "El secreto de la paz personal " , precio: 15000,  descripcion:"El secreto de la paz personal " , stock: 25, categoria: "motivacion"},

    {id:6 , nombre: "El Club de las 5 de la mañana [The 5 AM Club]" , precio: 16000,  descripcion:"El Club de las 5 de la mañana [The 5 AM Club]: Controla tus mañanas, impulsa tu vida [Control Your Mornings, Boost Your Life]" , stock: 15, categoria: "motivacion"},

  ]

  const getProductos = new Promise ((resolve, reject) =>{
    if (productos.length > 0) {
      setTimeout(() =>{
        resolve(productos)
      }, 2000)
    }else{
      reject(new Error ("no hay nada de datos"))
    }
  })

  getProductos
  .then((res) =>{
  })
  .catch((error) =>{
    console.log(error);
  })

  return (
    <div>
       <ItemDetail productos={productos} />
    </div>
  )
}

export default ItemDetailContainer