import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const RadioButtons = () => {
    const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
        <label>{label}</label>
        <Field name={name} {...rest} >
            {
                ({field}) => {
                    return options.map(option => {
                        return (
                            <React.Fragment>
                                <input 
                                type='radio' 
                                id={option.value} 
                                {...field} value={option.value} 
                                checked={field.value === option.value}/>
                            </React.Fragment>
                        )
                    })
                }
            }
        </Field>
    </div>
  )
}

export default RadioButtons