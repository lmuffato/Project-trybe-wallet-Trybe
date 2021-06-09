import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const numberSix = 6;
  const number400 = 400;
  return (
    <Formik
      initialValues={ { email: '', password: '' } }
      validationSchema={ Yup.object({
        email: Yup.string()
          .email('Email inválido')
          .required('Requerido'),
        password: Yup.string()
          .required('Requerido')
          .min(numberSix),
      }) }
      onSubmit={ (values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, number400);
      } }
    >
      { (formik) => (
        <Form>
          <Field
            name="email"
            type="email"
            placeholder="name@example.com"
            data-testid="email-input"
          />
          <ErrorMessage name="email" />
          <Field
            name="password"
            type="password"
            placeholder="atleast 6 characters"
            data-testid="password-input"
          />
          <ErrorMessage name="password" />
          <button
            type="submit"
            disabled={
              !/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(formik.values.email)
              || formik.values.password.length < numberSix
            }
          >
            Entrar
          </button>
        </Form>
      )}
    </Formik>
  );
}
