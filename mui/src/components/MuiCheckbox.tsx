import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const MuiCheckbox = () => {
    const [acceptTerm, setAcceptTerm] = useState(false)
    console.log({ acceptTerm })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTerm(event.target.checked)
    }
  return (
    <Box>
      <Box>
        <FormControlLabel  label='I accept the terms and conditions' control={<Checkbox checked={acceptTerm} onChange={handleChange}/>}/>
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkAddedIcon/>} checked={acceptTerm} onChange={handleChange}/>
      </Box>
    </Box>
  )
}

export default MuiCheckbox
