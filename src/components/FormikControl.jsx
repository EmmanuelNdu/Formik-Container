import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckboxGroup'
import DatePicker from 'react-date-picker'
import ChakraInput from './ChakraInput'

const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input' :
          return <Input {...rest} />
        case 'textarea' : 
        return <Textarea {...rest}/>
        case 'select' : 
        return <Select {...rest}/>
        case 'radio' : 
        return <RadioButtons {...rest}/>
        case 'checkbox' : 
        return <CheckboxGroup {...rest}/>
        case 'date' : 
        return <DatePicker {...rest}/>
        case 'chakrainput': return <ChakraInput {...rest}/>
        default: return null
    }
  
}

export default FormikControl