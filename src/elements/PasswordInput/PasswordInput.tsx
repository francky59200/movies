import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useController } from 'react-hook-form'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

export interface Props {
  error?: boolean
  helperText?: string
  name: string
  control: any
  label: string
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

const PasswordInput = ({ error, helperText, name, control, label }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { field } = useController({
    name,
    control,
  })
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  return (
        <StyledTextField type={showPassword ? 'text' : 'password'} id="outlined-basic" label={label} name={field.name} onChange={field.onChange} value={field.value} error={error} helperText={helperText} InputProps={{
          endAdornment: <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end">
                    {showPassword ? <PictoSvg className="text-white" icon="eye-show" /> : <PictoSvg icon="eye-hidden" />}
                </IconButton>
            </InputAdornment>,
        }} variant="outlined" />
  )
}

export default PasswordInput
