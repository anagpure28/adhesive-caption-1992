import React from "react";
import { FeatureStory, GridList } from "../list_cards/FeatureStory";
import Carousel from "../list_cards/Carousel";

export const HomePage = () => {
  return (
    <div style={{zIndex: "-1"}}>
      <div style={{width: "100%", background: "black"}}>
        <img src="https://www.regionalneurological.com/wp-content/uploads/2020/03/Regional-Neurological_Brain-Science.jpeg" alt="" width="100%"/>
      </div>
      <Carousel />
      <FeatureStory />
    </div>
  );
};
