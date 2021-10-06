import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardWrapper: {
    margin: " 0  0 30px",
    padding: "25px 25px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
  },
  coloredBtn: {
    marginRight: "10px",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    border: "0.5px solid #A6A6A6",
  },
  item: {
    textAlign: "left",
  },
  header: {
    fontWeight: 600,
    margin: "0 0 30px",
    textAlign: "left",
  },
  price: {
    fontWeight: 600,
    marginBottom: "50px",
  },
  container: {
    marginBottom: "30px",
  },
  text: {
    margin: "50px 0 ",
  },
  exist: {
    color: "rgb(87,174,0)",
    marginLeft: "10px",
  },
  garanty: {
    marginLeft: "10px",
  },
  memoryButton: {
    marginLeft: "10px",
  },
  productButton: {
    color: "#3ec0dd",
    fontSize: "18px",
    backgroundColor: "white",
    width: "185px",
    borderRadius: "5px",
    border: "1px solid  #3ec0dd",
    padding: "10px 0",

    "&:hover": {
      color: "white",
      backgroundColor: "#3ec0dd",
    },
  },
}));
export default useStyles;
