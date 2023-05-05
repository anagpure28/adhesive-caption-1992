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
      <p
        style={{
          textAlign: "left",
          margin: "2% 5%",
          fontSize: "30px",
          fontWeight: "700",
          borderBottom: "1px solid black"
        }}
      >Nature Sounds with Videos
      </p>
      <div style={{width: "70%", margin: "15px auto"}}>
        <img
          src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE2ODMyNjk1MDc&ixlib=rb-4.0.3&q=85"
          alt=""
          width="100%"
        />
      {/* <ReactPlayer controls url="https://youtu.be/0B7i8GeNKVY" width="100%"/> */}
      </div>

      {/* Video-1 */}
      <div
        style={{
          width: "80%",
          margin: "50px auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          // border: "1px solid black"
        }}
      >
        <div data-aos="fade-down-right">
          <VideoPlayer
            src={videoSrc1}
            poster={poster1}
            width="380"
            height="240"
            playbackRates={[-0.5, 1, 1.5, 2]}
          />
        </div>
        <div style={{ width: "40%" }} data-aos="fade-down-right">
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
          width: "80%",
          margin: "50px auto",
          // border: "1px solid black",
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
          width: "80%",
          margin: "50px auto",
          // border: "1px solid black",
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
