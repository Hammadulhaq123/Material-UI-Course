import React, { useState } from 'react';
import { Box, MenuItem, TextField } from '@mui/material';

const MuiSelect = () => {
    const [country, setCountry] = useState('');
    console.log({ country })
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
  return (
    <Box width='250px'>
      <TextField label='Select Country' select fullWidth value={country} onChange={handleOnChange}>
        <MenuItem value='in'>India</MenuItem>
        <MenuItem value='tr'>Turkey</MenuItem>
        <MenuItem value='ln'>London</MenuItem>
        <MenuItem value='au'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect
