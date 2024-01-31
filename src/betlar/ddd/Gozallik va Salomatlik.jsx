import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Cart from "../../app/card";
import Pruducts from "../../card/card";
import Pruducts3 from "../../app/cardapp";

function TeefizorFotovideoaudio() {
  return (
    <Box ml={{ base: '5px', xl: '100px' }}>
      <Box>
        <Box>
          <Heading ml={'-50px'}>Televizor, foto-video va audio</Heading>
        </Box>

        <Box ml={'-200px'} flexWrap={'wrap'} marginTop={"30px"} display={"flex"}>
          {/* Boshlandi 1 */}

          {/* tamom */}
          <Pruducts3 />

        </Box>


      </Box>
    </Box>
  );
}
export default TeefizorFotovideoaudio;
