import React, { useState } from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'


const MuiButtons = () => {
    // To toggle more than one use array and to toggle one use string | null
    // const [formats, setFormats] = useState<string[]>([])
    const [formats, setFormats] = useState<string | null>(null)

    console.log({
        formats,
    })
    // const handleOnChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        // To toggle only one option at a time
    const handleOnChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }
  return (
    // Stack uses flex properties to specify the layout and spacing of the childrens
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
        {/* We can use Buttons simply by specifying the variants */}
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>

        {/* But if we want to create a button that refer to a link we can simply add href attribute in the button elem and the button will act as a anchor tag having the same properties that the button initially had! */}
      <Button variant='contained' href='https://www.google.com'>Google</Button>

    </Stack>
    <Stack spacing={2} direction='row'>
        {/* We can change the palette by adding the color attribute but we must have to provide a specific name that MUI Allows */}
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='text' color='secondary'>Secondary</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='outlined' color='warning'>Warning</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='success'>Success</Button>
    </Stack>

    <Stack display='block' spacing={2} direction='row'>
        {/* We can change the size by adding a size prop and specifying a value that MUI allows */}
        <Button variant='contained' size='small'>Primary</Button>
        <Button variant='contained' size='medium'>Secondary</Button>
        <Button variant='contained' size='large'>Error</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
        {/* We can use icons inside a button at the end or at the beginning by simply using props that MUI allows */}
        <Button variant='contained' startIcon={<SendIcon />} disableElevation>Send</Button>
        {/* disableElevation cancel the hover shadow effects that mui provides */}
        <Button variant='contained' endIcon={<SendIcon />} disableRipple>Send</Button>
        {/* disableRipple prop is used to cancel the onclick effects from a button */}


        {/* We can add any event listener to MUI just like we add normally */}
        <Button variant='contained' color='warning' endIcon={<SendIcon />} onClick={()=> alert("Send")}>Send</Button>



        {/* We can use IconButton element if we just want to display an icon as a button */}
        {/* Also we can adjust its sizing and color just like we did previously */}
        <IconButton aria-label='send' color='warning' size='medium'>
            <SendIcon />
        </IconButton>
    </Stack>

    {/* Button Group */}
    <Stack direction='row'>

       
        <ButtonGroup variant='contained' size='small' color='error'>
            {/* Button group component is used to group the buttons together */}
            {/* Variant should be provided once in btngroup but event sholud be provided to individual child elem */}
             {/* <ButtonGroup variant='contained' size='small' color='error' orientation='vertical'> */}
            {/* You can also change the orientation to vertical */}
            <Button >Left</Button>
            <Button >Center</Button>
            <Button >Right</Button>
        </ButtonGroup>
    </Stack>


    <Stack direction='row'>
        {/* Toggle button group is used to toggle between elements one at a time or more than one */}
        {/* We can apply same properties of Button Group to toggle button group as well */}
        <ToggleButtonGroup aria-label='text formating' value={formats} onChange={handleOnChange}>
            <ToggleButton value='bold' aria-label='bold'>
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value='italic' aria-label='italic'>
                <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value='underline' aria-label='underlined'>
                <FormatUnderlinedIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    </Stack>
  )
}

export default MuiButtons
