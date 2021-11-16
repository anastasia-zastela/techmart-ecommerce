import React from "react";
import { Form, Formik } from "formik";
import { Input } from "@material-ui/core";

const Checkoutform = () => {
  return (
    <Formik>
      <Form>
        <Input value='1' />
        <Input />
        <Input />
      </Form>
    </Formik>
  );
};

export default Checkoutform;
