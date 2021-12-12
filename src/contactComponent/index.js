import React, { useRef } from "react";
import "./style.css";

import { FormGroup, Input } from "reactstrap";
import { Formik, Form } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";

let contactSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string(),
  inquiry: yup.string().required(),
  email: yup.string().email().required(),
});

function ContactComponent() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ehc0ki",
        "template_1h1bxne",
        e.target,
        "user_MJxfoLDd9jZEuR7ao9kXo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact">
        <Formik
          initialValues={{
            email: "",
            firstname: "",
            projectType: "",
            inquiry: "",
            lastname: "",
          }}
          validationSchema={contactSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => (
            <Form ref={form} onSubmit={sendEmail}>
              <div className="myForm">
                <div className="contact_first">
                  <FormGroup className="contact_item">
                    <Input
                      className="input"
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                    />
                    {errors.firstname && touched.firstname ? (
                      <div className="error_display">{errors.firstname}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="contact_item">
                    <Input
                      className="input"
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                    />
                    {errors.lastname && touched.lastname ? (
                      <div className="error_display">{errors.lastname}</div>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="contact_second">
                  <FormGroup className="contact_item">
                    <Input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="error_display">{errors.email}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="contact_item">
                    <Input
                      className="input"
                      type="text"
                      name="projectType"
                      placeholder="Project Type"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.projectType}
                    />
                  </FormGroup>
                </div>
              </div>
              <FormGroup className="contact_item">
                <Input
                  className="input"
                  type="textarea"
                  name="inquiry"
                  placeholder="Inquiry"
                  rows="6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.inquiry}
                />
              </FormGroup>
              <input
                className="button"
                color="primary"
                type="submit"
                // disabled={isSubmitting}
                disabled={!isValid}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ContactComponent;
