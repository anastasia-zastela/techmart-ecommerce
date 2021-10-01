import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../iphone12.jpg";
import img2 from "../1.jpg";
import img3 from "../images.jpg";
import { useStyles } from "./styles";

const Slider = () => {
  const classes = useStyles();

  return (
    <Carousel
      className={classes.mainSlider}
      axis="vertical"
      verticalSwipe="standard"
      thumbWidth="20"
    >
      <div>
        <img src={img} alt="iphone" width="100%" height="100%" />
      </div>
      <div>
        <img src={img} alt="iphone" width="100%" height="100%" />
      </div>
      <div>
        <img src={img} alt="iphone" width="100%" height="100%" />
      </div>
    </Carousel>
  );
};
export default Slider;
