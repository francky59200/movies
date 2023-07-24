import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

export interface Props {
  error?: boolean
  helperText?: string
  text: string
}

const PasswordInput = ({ error, helperText, text }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  return (
        <TextField sx={{ marginBottom: 4, width: '100%' }} color="success" type={showPassword ? 'text' : 'password'} id="outlined-basic" label={text} error={error} helperText={helperText} InputProps={{
          endAdornment: <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end">
                    {showPassword ? <PictoSvg icon="eye-show" /> : <PictoSvg icon="eye-hidden" />}
                </IconButton>
            </InputAdornment>,
        }} variant="outlined" />
  )
}

export default PasswordInput
