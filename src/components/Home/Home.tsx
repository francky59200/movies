import React, { useContext, useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { AuthContext } from '~/provider/AuthProvider'

const Home = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
        <div>
           <form>
               <TextField type="password" id="outlined-basic" label="Connexion" InputProps={{
                 endAdornment: <InputAdornment position="end">{showPassword ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 18C17.5228 18 22 12 22 12C22 12 17.5228 6 12 6C6.47715 6 2 12 2 12C2 12 6.47715 18 12 18Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg> : <Visibility />}</InputAdornment>,
               }} variant="outlined" />
           </form>
        </div>
  )
}

export default Home
