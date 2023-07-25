import React from 'react'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'
import { useController } from 'react-hook-form'

export interface Props {
  name: string
  label: string
  type: string
  defaultValue?: string
  id?: string
  error?: boolean
  helperText?: string
  className?: string
  control?: any
}

const StyledTextField = styled(TextField)({
  'marginBottom': '2rem',
  'width': '100%',
  '& label': {
    color: 'white',
  },
  '&:hover label': {
    fontWeight: 700,
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    'color': 'white',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
      borderWidth: 2,
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
})

const TextInput = ({ name, type, error, control, label }: Props) => {
  const {
    field,
  } = useController({
    name,
    control,
    rules: { required: true },
  })

  return (
        <StyledTextField
            label={label}
            onChange={field.onChange} // send value to hook form
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value} // input value
            name={field.name} // send down the input name
            inputRef={field.ref}
            variant="outlined"
            type={type}
            error={error}
        />
  )
}

export default TextInput
