import {
  Wrap,
  WrapItem,
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Button,
  Input,
  position,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import img from "../img1/finance.png";
import { useNavigate } from "react-router-dom";
import { BasketContext1 } from "../Basket/BasketContext1";
import { Context } from "../context";

function Pruducts() {
  const [state, setState] = useState([]);
  const navigite = useNavigate("");
  const { addcart } = useContext(BasketContext1);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => setState(result.data.products));
  }, []);
  const [search, setSearch] = useState("");

  const addToBasket = (product) => {
    addcart(product);
  };
  let { searchTitle } = useContext(Context);

  return (
    <Box>
      <Grid
        ml={{ base: "0px", xl: "150px" }}
        justifyContent={{ base: "center", xl: "center" }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap={"48px"}
      >
        {state
          .filter((val) => {
            return (
              val.brand.toLowerCase().includes(searchTitle.toLowerCase()) ||
              val.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
              val.description.toLowerCase().includes(searchTitle.toLowerCase())
            );
          })
          .map((val) => {
            return (
              <GridItem
                mt={"20px"}
                key={val.id}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                width={{ base: "100%", xl: "60%" }}
              >
                <Box justifyContent={"center"} display={"flex"}>
                  <Image
                    w={{ base: "100%", xl: "200px" }}
                    h={"200px"}
                    src={val.images[2]}
                  />
                </Box>
                <Box ml={"20px"}>
                  <Text gap={"20px"}>
                    {val.brand} {val.title}
                  </Text>
                </Box>
                <Box ml={"20px"}>
                  <Heading fontSize={"20px"}>{val.price}.000 сум</Heading>
                </Box>

                <Box ml={"10px"} display={"flex"} gap={"10px"}>
                  <Button
                    onClick={() => addToBasket(val)}
                    color={"black"}
                    border={"1px solid black"}
                    bg={"white"}
                  >
                    <MdOutlineShoppingCart />
                  </Button>
                  <Button
                    color={"red"}
                    border={"1px solid red"}
                    colorScheme="white"
                    w={{ base: "250px", xl: "300px" }}
                  >
                    Muddatli to'lov
                  </Button>
                </Box>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
}

export default Pruducts;
