import { Box, Container, Text } from "@chakra-ui/react";
import Pruducts from "../card/card";
import Pruducts3 from "../app/cardapp";

function Chegirmalar() {
  return (
    <Container maxW={"container.xl"}>
      <Box>
        <Box w={"10px"}>
          <Text></Text>
        </Box>

        <Box ml={"0px"}>
          <Pruducts3 />
        </Box>
      </Box>
    </Container>
  );
}

export default Chegirmalar;
