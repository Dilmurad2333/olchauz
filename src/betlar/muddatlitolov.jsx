import { Button } from "@chakra-ui/button";
import { Box,   Text,Heading , Container } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import Card from '../card/card'
import Cart from '../app/card'
import Pruducts3 from "../app/cardapp";


function Navbar() {
 
    return(
        <Box  >
            <Container maxW={'container.xl'}>
            <Box>
    <Heading ml={'-100px'} mt={'10px'}>Muddatli to'lov </Heading>
   </Box>
   <Box>
    <Box>
        {/* pustoy inavi baglidon vaj */}
    </Box>
    <Box>
                        <Pruducts3 />
    </Box>
   </Box>
            </Container>
 

        </Box>
    )
}
export default Navbar