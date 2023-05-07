import React, { useState, useRef, useEffect } from "react";
import { FaExclamationCircle, FaEye, FaThumbsUp } from "react-icons/fa";
import axios from "axios";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import CustomLoader from "../components/CustomLoader";

const colorsTheme = ["#fce505", "#242424", "#fcfcfc"];

const SingleBlogPage = () => {
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const [apiResponse, setApiResponse] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .get(`https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery/${id}`)
      .then((res) => {
        let x = Number(res.data.view);
        setApiResponse(res.data);
        setLoading(false);
        axios.put(
          `https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery/${id}`,
          {
            ...res.data,
            view: x + 1, // Increase the view count by 1
          }
        );
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleLike = () => {
    // setLike((prev) => prev + 1);
    let x = Number(apiResponse.like);
    setLike(true);
    axios
      .put(`https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery/${id}`, {
        ...apiResponse,
        like: x + 1, // Increase the view count by 1
      })
      .then((res) => {
        setApiResponse(res.data);
        setLike(false);
      });
  };

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime());
      playerRef.current.getInternalPlayer().playVideo();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().pauseVideo();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().pauseVideo();
      playerRef.current.seekTo(0);
      setIsPlaying(false);
    }
  };

  return (
    <Box bg={colorsTheme[1]} p={8}>
      {loading ? (
        <CustomLoader pleasewait={"Please Wait... "} />
      ) : (
        <Flex justifyContent="center" alignItems="center" flexDir="column">
          <Text
            as="h1"
            fontSize="4xl"
            color={colorsTheme[0]}
            textAlign="center"
            mb={8}
          >
            {apiResponse.title}
          </Text>
          <Box w="80%" mb={8}>
            <ReactPlayer
              ref={playerRef}
              url={apiResponse.youtube}
              playing={isPlaying}
              width="100%"
              height="360px"
              // controls={false}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                    autoplay: 0,
                    controls: 0,
                  },
                },
              }}
            />
            <Flex justifyContent="center" alignItems="center" mt={4}>
              {isPlaying ? (
                <IconButton
                  aria-label="Pause"
                  icon={<FaPause />}
                  onClick={handlePause}
                />
              ) : (
                <IconButton
                  aria-label="Play"
                  icon={<FaPlay />}
                  onClick={handlePlay}
                />
              )}
              <IconButton
                aria-label="Stop"
                icon={<FaStop />}
                onClick={handleStop}
              />
            </Flex>
          </Box>
          <Box
            bg="yellow.100"
            color="gray.800"
            borderRadius="md"
            p={4}
            mb={8}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            fontWeight="semibold"
            boxShadow="0px 1px 2px rgba(0, 0, 0, 0.1)"
            border="1px solid gray.300"
            transition="all 0.2s"
            _hover={{ boxShadow: `inset 5px 0px 0px 5px ${colorsTheme[0]}` }}
            maxW={{ base: "100%", md: "80%", lg: "60%" }}
          >
            <Icon as={FaExclamationCircle} mr={2} />
            <Text>{apiResponse.details}</Text>
          </Box>
          <Text
            as="blockquote"
            fontSize="2xl"
            fontStyle="italic"
            fontWeight="bold"
            textAlign="center"
            color={colorsTheme[0]}
            p={8}
            borderLeft="4px solid"
            borderColor={colorsTheme[0]}
          >
            {apiResponse.quote}
          </Text>
          <Flex
            justifyContent="space-around"
            alignItems="center"
            w="50%"
            mt={8}
          >
            <Button
              color="yellow.300"
              variant="ghost"
              leftIcon={<FaEye />}
              fontSize="md"
              border="1px solid yellow"
            >
              {apiResponse.view} Views
            </Button>
            <Button
              colorScheme="yellow"
              leftIcon={<FaThumbsUp />}
              fontSize="md"
              onClick={handleLike}
            >
              {like ? "Posting Like" : `${apiResponse.like} Likes`}
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default SingleBlogPage;
