import React from "react";
import VideoPlayer from "react-video-js-player";
import N1 from "../Videos/N1.mp4";
import N2 from "../Videos/N2.mp4";
import N3 from "../Videos/N3.mp4";
import "./Video.css";
import Carousel3 from "../list_cards/Carousel3";
import { NatureArr1, NatureArr2, cards3, cards4 } from "../data_Arrays/data";
import ReactPlayer from "react-player"
import { FeatureStory } from "../list_cards/FeatureStory";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

export const NatureSound = () => {
  const videoSrc1 = N1;
  const poster1 =
    "https://i.pinimg.com/originals/8d/93/b3/8d93b3a729295ebabf8b8394fb1b5872.jpg";
  const videoSrc2 = N2;
  const poster2 =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
  const videoSrc3 = N3;
  const poster3 =
    "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?cs=srgb&dl=pexels-pixabay-36478.jpg&fm=jpg";

  return (
    <div>
      <div>
        <img
          src="https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg"
          alt=""
        />
      </div>
      {/* Video-1 */}
      <div
        style={{
          margin: "50px 50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data-aos="fade-down-right"
      >
        <div>
          <VideoPlayer
            src={videoSrc1}
            poster={poster1}
            width="380"
            height="240"
            playbackRates={[-0.5, 1, 1.5, 2]}
          />
        </div>
        <div style={{ width: "40%" }}>
          <p style={{ textAlign: "justify" }}>
            Mindfulness is one effective way to decrease stress by helping you
            stay present in the moment. If you’re looking to improve your own
            mindfulness techniques or are new to the practice altogether, you
            can gain practical advice from Paige Oldham and her blog Simple
            Mindfulness. Paige writes extensively about anxiety management, the
            negative health effects of stress, how to increase personal
            happiness, and other topics related to mindfulness-based strategies.
          </p>
        </div>
      </div>

      {/* Video2 */}
      <div
        style={{
          margin: "50px 50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data-aos="fade-down-left"
      >
        <div style={{ width: "40%" }}>
          <p style={{ textAlign: "justify" }}>
            What makes nature soothing? Spending time in nature can improve
            memory, lower stress hormones, and reduce feelings of depression or
            anxiety, among other perks. Being in nature can help clear your head
            and bring you into the present moment, and is a great way to
            de-stress and relax.
          </p>
        </div>
        <div>
          <VideoPlayer
            src={videoSrc2}
            poster={poster2}
            width="380"
            height="240"
            playbackRates={[-0.5, 1, 1.5, 2]}
          />
        </div>
      </div>

      {/* Video3 */}
      <div
        style={{
          margin: "50px 50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data-aos="fade-down-right"
      >
        <div>
          <VideoPlayer
            src={videoSrc3}
            poster={poster3}
            width="380"
            height="240"
            playbackRates={[-0.5, 1, 1.5, 2]}
          />
        </div>
        <div style={{ width: "40%" }}>
          <p style={{ textAlign: "justify" }}>
            Nature helps calm your nerves, as the tranquility of the outdoors is
            much better on your brain than loud, fast, urban environments. Find
            a bench in an easy-to-reach location and take some time to simply
            sit and relax in nature. The Metolius Preserve has some great
            benches and viewing platforms that are perfect for contemplation and
            relaxation.
          </p>
        </div>
      </div>

      <Carousel3 data={cards3} title={"Nature Soothing Music"}/>
      <FeatureStory data={NatureArr1} title={"Featured Videos"}/>
      <FeatureStory data={NatureArr2} title={"Featured Blogs"}/>
      <Carousel3 data={cards4} title={"Nature Vibes"}/>
      <br />
    </div>
  );
};
