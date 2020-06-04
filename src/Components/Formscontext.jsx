import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

const onSubmit = (values) => {
  //   console.log('formdata', values)
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const Formscontext = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label htmlFor="name"> Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            ></Field>
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <Field
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
            ></Field>
            <ErrorMessage name="email" component={TextError} />
          </div>
          <div>
            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              id="channel"
              name="channel"
              placeholder="enter your channel.."
            ></Field>
            <ErrorMessage name="channel">
              {(Errormsg) => <div className="error">{Errormsg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments" />
          </div>
          <div>
            {/* working with custom components and hooking them to formiks */}
            <label htmlFor="address">Address</label>
            <Field name="address">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input type="text" id="address" {...field} />
                    {meta.touched && meta.error ? (
                      <div> {meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <Field type="submit" value="Submit"></Field>
        </Form>
      </Formik>
    </div>
  );
};

export default Formscontext;
