import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const dropdownOptions = [
    {key: 'Select an option ', value:''},
    {key: 'option 1', value:'option1'},
    {key: 'option 2', value:'option2'},
    {key: 'option 3', value:'option3'}
  ]
    const initialValues = {
      email: '',
      description: '',
      selectOption: ''
    }
    const validationSchema = Yup.object({
      email: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      selectOption: Yup.string().required('Required')
    })
    const onsubmit = values => console.log('Form data', values)
  return (
    <Formik initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={onsubmit} 
    >
        {
            formik => (
            <Form>
              <FormikControl 
              control='input' 
              type='email' 
              label='Email' 
              name='email' 
              />
              <FormikControl 
              control='textarea'
              label='Description'
              name='description'
              />
              <FormikControl
              control='select'
              label='Select a topic'
              name='selectOption'
              options={dropdownOptions}
              />
                <button type='submit'>Submit</button>
            </Form>
        )}
    </Formik>
  )
}

export default FormikContainer