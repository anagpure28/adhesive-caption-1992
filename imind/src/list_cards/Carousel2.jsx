import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    "https://cdn.who.int/media/images/default-source/imported/adolescents-mental-health.tmb-1920v.jpg?sfvrsn=c6b21ab0_25",
    "https://probonoaustralia.com.au/wp-content/uploads/2016/06/mental-health-young-girl-head-on-hands-RS.jpg",
    "https://static.toiimg.com/photo/61017464.cms",
    "https://images.indianexpress.com/2018/10/depression-getty-images-759.jpg",
    "https://annenberg.usc.edu/sites/default/files/styles/article_full_content_1240x600/public/iStock-815784448%20%281%29.jpg?itok=E1HRQfAA",
    "https://img.mensxp.com/media/content/2020/Oct/Things-Not-To-Say-To-Someone-Suffering-From-Mental-Health-Issues1400_5f82fa9999ba9.jpeg?w=820&h=540&cc=1",
    "https://www.shutterstock.com/shutterstock/videos/1058150641/thumb/1.jpg?ip=x480",
    "https://media.istockphoto.com/id/650326960/photo/man-leaning-hands-against-wall.jpg?s=612x612&w=0&k=20&c=phnNsRaQh1XJ5bQI5n_mRbVJJJRLLkSSP_KsItKjl1g="
  ];

  return (
    <Box
      position={'relative'}
      width={'100%'}
      m={"auto"}
      mt={1}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme={"white"}
        bgGradient="linear(to-r, pink.400, orange.400)"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme={"white"}
        bgGradient="linear(to-r, pink.400, orange.400)"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            // w={100}
            h={400}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}