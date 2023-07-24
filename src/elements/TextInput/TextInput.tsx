import React from 'react'
import { TextField } from '@mui/material'

export interface Props {
  label: string
  type: string
  defaultValue?: string
  id?: string
  error?: boolean
  helperText?: string
  className?: string
}

const TextInput = ({ label, type, defaultValue, id, error, helperText, className }: Props) => {
  return (
        <TextField
            id={id}
            label={label}
            type={type}
            error={error}
            variant="outlined"
            className={className}
            defaultValue={defaultValue}
            helperText={helperText}
            sx={{ marginBottom: 4, width: '100%' }}
            inputProps={{ sx: {borderColor: '#fff'} }}
        />
  )
}

export default TextInput
