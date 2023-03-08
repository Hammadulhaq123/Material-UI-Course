import React from 'react'
import { Box, Stack, Divider, Grid } from '@mui/material'
const MuiLayout = () => {
  return (
    <>
    {/* // spacing={1} = margin of 8px
    // Divider component is like an hr tag that you can use vertically and horizontally */}
    
    <Stack sx={{border: '1px solid gray'}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem sx={{backgroundColor: "success.main", width:"4px"}}/>}>
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
        // borderRadius:'10px',
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
        // borderRadius={2}
        p={2}
    >
      Hammad ul haq
    </Box>
    </Stack>


    {/* For more understanding about Grid columns and row check the mui website */}
    <Grid container my={4}>
      {/*In Grid container each row is divided into 12 column after 12 col it moves to next row and you can specify how many column you want to allocate to a item in this case we have divided all with 6 column */}
      <Grid item xs={6}><Box height={40} bgcolor='primary.light'>Item</Box></Grid>
      <Grid item xs={6}><Box height={40} bgcolor='primary.light'>Item</Box></Grid>
      <Grid item xs={6}><Box height={40} bgcolor='primary.light'>Item</Box></Grid>
      <Grid item xs={6}><Box height={40} bgcolor='primary.light'>Item</Box></Grid>
    </Grid>
    </>
  )
}
export default MuiLayout