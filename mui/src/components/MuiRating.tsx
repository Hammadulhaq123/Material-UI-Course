import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'


const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    console.log({value})
    const handleValue = (_event: React.ChangeEvent<{}> , newValue:  number | null) => {
        setValue(newValue)
    }
  return (
    <Stack>
      <Rating value={value} onChange={handleValue} precision={0.5} size='large' icon={<Favorite fontSize='inherit' color='error'/>} emptyIcon={<FavoriteBorder fontSize='inherit'/>}/>
      {/* To change the icon you can use any icon and pass ot as a prop just like we did above originally we have start as iconsbut we are going to use heart */}
      {/* You can pass "readOnly" prop and set intial value a number instead of null to just display the rating user it wont allow user to interact with the rating */}
      {/* You can also use "highlightSelectedOnly" prop to display only the highlighted icon you can use this prop when you want to take users reaction in the form of emoji from sad to happy it wont be a good exp to highlight all emojis thats why we use highlightSelectedOnly props in these sort of cases */}
    </Stack>

)
}

export default MuiRating
