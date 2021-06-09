import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const minNumber = 6;
const numberTime = 400;

export default function Login() {
  return (
    <Formik
      initialValues={ { email: '', password: '' } }
      validationSchema={ Yup.object({
        email: Yup.string()
          .email('Email inválido')
          .required('Requerido'),
        password: Yup.string()
          .required('Requerido')
          .min(minNumber),
      }) }
      onSubmit={ (values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, numberTime);
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
              || formik.values.password.length < minNumber
            }
          >
            Entrar
          </button>
        </Form>
      )}
    </Formik>
  );
}
