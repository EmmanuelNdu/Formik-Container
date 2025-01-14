import React from 'react'
import { Formik, Form, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validateYupSchema} onSubmit={onSubmit}>
        {
            formik => {
                return <form>
                    <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'/>
                    <FormikControl
                    control='input'
                    type='password'
                    label='Password'
                    name='password'/>
                    <button type='submit' disabled={!formik.isValid}>Submit</button>
                </form>
            }
        }
    </Formik>
  )
}

export default LoginForm