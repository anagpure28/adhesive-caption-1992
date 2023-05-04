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
    slidesToShow: 3,
    slidesToScroll: 3,
};

export default function Carousel2() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    "https://cdn.dribbble.com/users/2302565/screenshots/6630253/jakehawkins.gif",
    "https://media.tenor.com/ZjG74RD4xXAAAAAM/mental-health-mental-health-action-day.gif",
    "https://media0.giphy.com/media/wPbZpEPgOjOhVlD0XA/giphy.gif",
    "https://media.tenor.com/ybn86nLN5mAAAAAC/brain-mental.gif",
    "https://i0.wp.com/media1.giphy.com/media/JPgvXZhEvC434iZMCP/giphy.gif?resize=480%2C480&ssl=1",
    "https://cdn.dribbble.com/users/1060375/screenshots/5448294/ezgif.com-optimize.gif",
    "https://i.gifer.com/origin/b0/b087cde09dd5f3c05f5ba71cdbd08850.gif",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/efa41d71503887.5bc7a3379e618.gif",
    "https://media.tenor.com/Rrdk8Q_-xncAAAAM/im_lauren_jacobs-mental-illness-is-not-a-personal-failure.gif",
  ];

  return (
    <Box
      position={'relative'}
      width={'96%'}
      height="330px"
      borderRadius={10}
      m={"auto"}
      mt={6}
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
          <Box width="100%">
            <img src={url} alt="" width="100%"/>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}