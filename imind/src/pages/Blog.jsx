import axios from "axios";
import React from "react";

const Blog = () => {
  axios
    .get(`https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery`)
    .then((res) => console.log(res.data));
  return (
    <div>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsam,
        totam iure iste ex placeat beatae accusantium vitae nobis laboriosam
        commodi laudantium ab magni dolor voluptate ducimus quo dolores modi.
      </p> */}
    </div>
  );
};

export default Blog;
