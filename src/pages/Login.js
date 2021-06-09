import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
          .min(6),
      })}
      onSubmit={ (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
      }}
    >
      <Form>
        <Field 
          name="email" 
          type="email"
          placeholder="Email" 
          data-testid="email-input"
        />
        <ErrorMessage name="email" />
        <Field 
          name="password" 
          type="password"
          placeholder="Password" 
          data-testid="password-input"
        />
        <ErrorMessage name="password" />
        <button type="submit">Entrar</button>
      </Form>
    </Formik>
  )
}
