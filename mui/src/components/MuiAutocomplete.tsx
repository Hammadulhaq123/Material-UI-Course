import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

type Skill = {
    id: number,
    label: string
}

const array = ['HTML', 'CSS', 'Javascript', 'PHP', 'Typescript']
// Creating data from above array
const skillOption = array.map((arr, index) => ({
    id: index + 1,
    label: arr
}))
const MuiAutocomplete = () => {
        {/* Example of tracking it as a string */}
    const [value, setValue] = useState<string | null>(null)

      {/* Example How to track the values in an object */}
    const [skill, setSkill] = useState<Skill | null>(null)
    console.log({value})
    console.log({ skill })
  return (
    <Stack spacing={2} width='300px'>
        {/* Example of tracking it as a string */}
      <Autocomplete options={array} renderInput={(params) => <TextField variant='standard' label='Skills' {...params}/>}
       value={value} onChange={(event: any, newValue: string | null) => {setValue(newValue)}} 
      />

      {/* Example How to track the values in an object */}
      <Autocomplete options={skillOption} renderInput={(params) => <TextField variant='standard' color='warning' label='Skills' {...params}/>}
       value={skill} onChange={(event: any, newValue: Skill | null) => {setSkill(newValue)}} //free Solo 'Prop canbe used to allow free input'
      />
    </Stack>
  )
}

export default MuiAutocomplete
