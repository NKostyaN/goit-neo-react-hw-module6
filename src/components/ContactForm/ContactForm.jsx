import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, 3 characters min")
    .max(50, "Too long, 50 characters max")
    .required("Required field"),
  number: Yup.string()
    .min(3, "Too short, 3 characters min")
    .max(50, "Too long, 50 characters max")
    .required("Required field"),
});

const ContactForm = ({ toSubmit }) => {
  const handleSubmit = (values, actions) => {
    toSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.contactForm}>
        <label>
          Name
          <div className={css.errMsg}>
            <ErrorMessage name="name" />
          </div>
          <Field className={css.contactField} type="text" name="name" />
        </label>
        <label>
          Number
          <div className={css.errMsg}>
            <ErrorMessage name="number" />
          </div>
          <Field className={css.contactField} type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
