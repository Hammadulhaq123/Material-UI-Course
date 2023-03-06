import React, { useState } from 'react'
import { Box, FormControlLabel, Switch } from "@mui/material"

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    const [label, setLabel] = useState('Dark Mode')
    console.log({ checked })
    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
        label==="Dark Mode"?setLabel("Light Mode"):setLabel("Dark Mode")
    }
  return (
    <Box>
      <FormControlLabel label={label}  control={<Switch checked={checked} color='warning' onChange={handleChecked} size="small"/>} />
    </Box>
  )
}

export default MuiSwitch
