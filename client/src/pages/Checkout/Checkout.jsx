import React, { useState } from "react";
import Checkoutform from "./CheckoutForm/CheckoutForm";
import {
  Container,
  Box,
  useMediaQuery,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { useStyles } from "./style";

const Checkout = () => {
  const style = useStyles();

  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl" className={style.checkoutContainer}>
      <Box className={style.checkoutForm}>
        <Typography variant="h5" className={style.formTitle}>
          Оформление заказа
        </Typography>
        <hr align="center" width="100%" size="1" color="#EBEBEB" />
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Я новый покупатель"
              value={1}
              className={style.anchorStyle}
            />
            <Tab
              label="Я постоянный покупатель"
              value={2}
              className={style.anchorStyle}
            />
          </TabList>

          <TabPanel value={1}>{Checkoutform}</TabPanel>
          <TabPanel value={2}>Item Two</TabPanel>
        </TabContext>
      </Box>
      <Box>2</Box>
    </Container>
  );
};

export default Checkout;
