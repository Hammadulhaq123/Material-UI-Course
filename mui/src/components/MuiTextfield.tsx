import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

const MuiTextfield = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined'/>
        <TextField label='Name' variant='standard'/>
        <TextField label='Name' variant='filled'/>
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Small Secondary' color='warning' size='small' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label="Form Input" required 
        value={value} 
        onChange={(e)=> {setValue(e.target.value)}} 
        error={!value} 
        helperText={!value ? 'Required' : 'Do not share it with anyone'}/>

        <TextField label="Password" type='password'  helperText='Donot share password with anyone' />
            {/* You can also diable the input field by passing a disbled prop */}
        {/* <TextField label="Password" type='password' disabled helperText='Donot share password with anyone' /> */}

        <TextField label='Read only' inputProps={{ readOnly: true }}/>
      </Stack>
      
      <Stack direction='row' spacing={2}>
        <TextField label='Amount' 
        InputProps={{ endAdornment: <InputAdornment position='end'>Kg</InputAdornment>, }}/>
        
        <TextField label='Weight' 
        InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment>, }}/>
      </Stack>
    </Stack>
  )
}

export default MuiTextfield
