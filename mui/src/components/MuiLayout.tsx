import React from 'react'
import { Box } from '@mui/material'
const MuiLayout = () => {
  return (
    <>
    {/* //By default a box is a div component after rendering but you can add component prop to change it to span or else */}
    <Box
    sx={{
        width:'150px',
        height: '100px',
        backgroundColor: 'warning.main',
        color: 'black',
        padding:'16px',
        fontFamily:'sans-serif',
        fontWeight:'700',
        borderRadius:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '&:hover': {
            backgroundColor: 'warning.light'
        }
    }}>
      Hammad ul haq
    </Box>
    <Box
    // These are default styling props provided by mui we can use this but sometime using sx or style prop is better
        display='flex' 
        height='100px' 
        width='150px' 
        bgcolor='warning.light'
        borderRadius={2}
        p={2}
    >
      Hammad ul haq
    </Box>
    </>
  )
}
export default MuiLayout