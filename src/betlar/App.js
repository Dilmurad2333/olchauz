import {
  Box,
  Button,
  Container,
  Text,
  color,
  useColorMode,
} from "@chakra-ui/react";
import Pruducts from "../card/card";
import SimpleSlider from "../caruesel/caruesel";
import Footer from "../foooter/foorer";
import Caruesel from "../app/caruesel";
import Cardred from "../app/cardred";
import Pruducts1 from "../app/cardapp";
import Text1 from "../app/tetx";

function App() {
  return (
    <Box>
    
      
        <SimpleSlider />
        <Caruesel />

        <Pruducts />
        <Cardred />
        <Pruducts1 />
        <Text1 />
        
      
    </Box>
  );
}

export default App;
