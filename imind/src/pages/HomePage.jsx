import React from "react";
import { FeatureStory } from "../list_cards/FeatureStory";
import Carousel from "../list_cards/Carousel";
import Carousel2 from "../list_cards/Carousel2";
import { cards1, cards2, featureArr } from "../data_Arrays/data";

export const HomePage = () => {
  return (
    <div style={{zIndex: "-1"}}>
      <div style={{width: "100%", background: "black"}}>
        <img src="https://www.regionalneurological.com/wp-content/uploads/2020/03/Regional-Neurological_Brain-Science.jpeg" alt="" width="100%"/>
      </div>
      <Carousel data={cards1} title={"Mental Health Problems"}/>
      <FeatureStory data={featureArr} title={"Featured Videos"}/>
      <Carousel2 data={cards2} title={"Mental Health Issues"}/>
    </div>
  );
};
