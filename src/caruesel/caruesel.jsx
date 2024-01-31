import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";
import Taymer from "./taymer";

function  SimpleSlider() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoSpeed:10000,
    };
    return (
      <Box>
       


<Box    padding={'60px'}>
        <Slider  {...settings}>
          <Box >
              <Image borderRadius={'10px'} h={{ base: '110px', xl: '350px' }} w={'100%'} src="  https://olcha.uz/image/original/category_slider/oLTUy6lXH4gqWtFmpzyWUrQ7KK7NbjnI0ncFaYVLKEenlRXDLBU513mhB20B.png"/>
          </Box>
          <Box>
              <Image borderRadius={'10px'} h={{ base: '110px', xl: '350px' }} w={'100%'} src="https://olcha.uz/image/original/category_slider/CrK1p393rRsAogFwmYbkFTfLUgO6y5GyGsrlvchZyDrkeZLkIpaX0FGEKCdp.png"/>
          </Box>
          <Box>
              <Image borderRadius={'10px'} h={{ base: '110px', xl: '350px' }} w={'100%'} src="https://olcha.uz/image/original/sliders/ru/QoSQpYTUvniq1ml5XWW7wXn1lZkSKxI0VxuifX4SoRVPDX6ta9cWlUIXeE6w.jpg"/>
          </Box>
          <Box>
              <Image borderRadius={'10px'} h={{ base: '110px', xl: '350px' }} w={'100%'} src="https://olcha.uz/image/original/category_slider/QPvBeWDfBz4L0IrPsGDkDP8hkzl7wSaZI0NsEOt7Y5wtPTJMF1hTcYJkgF10.png"/>
          </Box>
          <Box>
              <Image borderRadius={'10px'} h={{ base: '110px', xl: '350px' }} w={'100%'} src="https://olcha.uz/image/original/category_slider/y7S7UHqQFgUKNevQZhZjEowIelEeBR296dnGyRGygzuA5fMsc2uyf3WTpyhd.png"/>
          </Box>
        </Slider>
              
       
      </Box>
      </Box>
     
    );
  }
  export default SimpleSlider