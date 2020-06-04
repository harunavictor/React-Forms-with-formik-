import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  //   console.log('formdata', values)
};

const validate = (values) => {
  //values.name values.email values.channel
  //errors.name errors.email errors.channel
  //errors.name = 'this field is required!'

  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  channel:Yup.string().required('Required!')

})

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });
  console.log("visited", formik.touched);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="form">
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
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
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
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
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
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

export default YoutubeForm;
