import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainSlider: {
    width: "500px",
    height: "390px",
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",
    "& .carousel": {
      width: "200px",
    },
    "& .thumb": {
      opacity: 0.5,
    },
    "& .thumbs": {
      padding: "0px",
      display: "flex",
      flexDirection: "column ",

      alignAtems: "center",
    },
    "& .thumb.selected": {
      border: "none",
      opacity: 1,
    },
    "& .thumbs-wrapper ": {
      margin: "0px 10px",
    },
    "& .control-dots, .control-arrow, .carousel-status, .control-next": {
      display: "none",
    },
  },
}));
