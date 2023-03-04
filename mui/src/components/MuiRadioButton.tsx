import React from 'react'
import { useState } from 'react'
import { Box, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel } from '@mui/material'


export default function MuiRadioButton() {
    const [value, setValue] = useState('')
    console.log({ value })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
  return (
    <Box>
      <FormControl>
        <FormLabel>
            Years of Experience
        </FormLabel>
        <RadioGroup
            name=''
            aria-labelledby=''
            value={value}
            onChange={handleChange}
            row
        >
            <FormControlLabel control={<Radio/>} label='0-2' value='0-2' />
            <FormControlLabel control={<Radio/>} label='3-5' value='3-5' />
            <FormControlLabel control={<Radio/>} label='6-7' value='6-7' />

        </RadioGroup>
      </FormControl>
    </Box>
  )
}
