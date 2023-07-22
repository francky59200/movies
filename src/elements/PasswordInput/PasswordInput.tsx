import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  return (
        <TextField type={showPassword ? 'text' : 'password'} id="outlined-basic" label="Connexion" InputProps={{
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
