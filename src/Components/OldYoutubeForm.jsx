import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  //   console.log('formdata', values)
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  console.log("visited", formik.touched);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="form">
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            // onChange={formik.handleChange}
            // value={formik.values.name}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("name")}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name.."
          />
          {formik.errors.name ? (
            <div className="error">
              {formik.touched.name && formik.errors.name}
            </div>
          ) : null}
        </FormGroup>
      </div>
      <div className="form">
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            // onChange={formik.handleChange}
            // value={formik.values.email}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("email")}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email.."
          />
          {formik.errors.email ? (
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>
          ) : null}
        </FormGroup>
      </div>
      <div className="form">
        <FormGroup>
          <Label htmlFor="channel">Channel</Label>
          <Input
            // onChange={formik.handleChange}
            // value={formik.values.channel}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("channel")}
            type="text"
            name="channel"
            id="channel"
            placeholder="write your channel.."
          />
          {formik.errors.channel ? (
            <div className="error">
              {formik.touched.channel && formik.errors.channel}
            </div>
          ) : null}
        </FormGroup>
      </div>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default OldYoutubeForm;
