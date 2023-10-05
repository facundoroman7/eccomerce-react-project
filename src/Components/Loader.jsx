import { Spinner } from "@chakra-ui/react"
import '../hoja-de-estilo/Spinner.css'

const Loader = () => {
    return (
        <div className="spinner">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>
    )
}

export default Loader