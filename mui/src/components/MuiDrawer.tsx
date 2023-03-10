import React from 'react'
import  { Drawer, Box, Typography, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'


const MuiDrawer = () => {
    const [isDrawerOpen, setisDrawerOpen] = React.useState(false)
  return (
    <>
    <IconButton aria-label='logo' onClick={() => setisDrawerOpen(true)} size='large' color='inherit' edge='start'>
        <Menu />
    </IconButton>

    <Drawer
    anchor='left'
    open={isDrawerOpen}
    onClose={() => setisDrawerOpen(false)}
    >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                Side Panel
            </Typography>
        </Box>
      
    </Drawer>
    </>
  )
  }
export default MuiDrawer
