import React from "react";
import { useStyles } from "./styles";
import {
  Box,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Slider,
  Checkbox,
  useMediaQuery,
} from "@mui/material";

import { TextField } from "@material-ui/core";

const ProductsFilter = ({
  productsList,
  value,
  setValue,
  maxValue,
  minValue,
  getColorsItems,
  quantity,
  setQuantity,
  getBrandItems,
  getCategoriesItems,
}) => {
  const classes = useStyles();
  const is520 = useMediaQuery("(max-width:520px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const colorCheckbox = [
    ...new Set(productsList.map((item) => item.color)),
  ].map((item) => (
    <FormControlLabel
      id={item}
      key={item}
      control={
        <Checkbox
          onClick={getColorsItems}
          id={item}
          size={is520 ? "small" : "medium"}
        />
      }
      color="success"
      label={item}
      onClick={(e) => e.stopPropagation()}
      className={is520 ? classes.checkBoxAdaptive : null}
    />
  ));

  const brandCheckbox = [
    ...new Set(productsList.map((item) => item.brand)),
  ].map((item) => (
    <FormControlLabel
      id={item}
      key={item}
      control={
        <Checkbox
          onClick={getBrandItems}
          id={item}
          size={is520 ? "small" : "medium"}
        />
      }
      color="success"
      label={item}
      onClick={(e) => e.stopPropagation()}
      className={is520 ? classes.checkBoxAdaptive : null}
    />
  ));
  const categoriesCheckbox = [
    ...new Set(productsList.map((item) => item.categories)),
  ].map((item) => (
    <FormControlLabel
      id={item}
      key={item}
      control={
        <Checkbox
          onClick={getCategoriesItems}
          id={item}
          size={is520 ? "small" : "medium"}
        />
      }
      color="success"
      label={item}
      onClick={(e) => e.stopPropagation()}
      className={is520 ? classes.checkBoxAdaptive : null}
    />
  ));

  const quantityChange = (e) => {
    setQuantity({ ...quantity, [e.target.value]: e.target.checked });
  };

  return (
    <div className={is520 ? classes.productsFilter720 : classes.productsFilter}>
      <FormLabel component="legend">Цена</FormLabel>
      <Box
        className={classes.textFieldWrapper}
        sx={is520 ? { width: 180 } : { width: 220 }}
      >
        <TextField
          className={classes.textFieldItem}
          style={is520 ? { fontSize: "10px" } : null}
          size="small"
          id="outlined-basic"
          label="От"
          variant="outlined"
          className={classes["MuiOutlinedInput-input"]}
          value={value[0]}
          type="number"
        ></TextField>
        <TextField
          className={classes.textFieldItem}
          size="small"
          id="outlined"
          label="До"
          variant="outlined"
          className={classes["MuiOutlinedInput-input"]}
          value={value[1]}
          type="number"
        />
      </Box>
      <Box sx={{ width: 180 }} className={classes.priceSlider}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          size="small"
          min={minValue[0].currentPrice}
          max={maxValue[0].currentPrice}
        />
      </Box>

      <Box className={classes.checkboxWrapper}>
        <FormLabel component="legend">Цвет</FormLabel>
        {colorCheckbox}
      </Box>
      <Box className={classes.checkboxWrapper}>
        <FormLabel component="legend">Категория</FormLabel>
        {categoriesCheckbox}
      </Box>
      <Box className={classes.checkboxWrapper}>
        <FormLabel component="legend">Бренд</FormLabel>
        {brandCheckbox}
      </Box>
      <Box className={classes.checkboxWrapper}>
        <FormLabel component="legend">Наличие</FormLabel>
        <RadioGroup
          aria-label="Наличие"
          name="controlled-radio-buttons-group"
          value={quantity}
          // onChange={quantityChange}
        >
          <FormControlLabel
            value="inStock"
            control={<Checkbox onChange={quantityChange} />}
            label="В наличии"
          />
          <FormControlLabel
            value="noInStock"
            control={<Checkbox onChange={quantityChange} />}
            label="Нет в наличии"
          />
        </RadioGroup>
      </Box>
    </div>
  );
};

export default ProductsFilter;
