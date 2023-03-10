import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography, MenuItem, Menu } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

const MuiNavbar = () => {
  const open = false;
  return (
    <AppBar position='static' sx={{background: '#000'}}>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>POKEMON</Typography>

        <Stack direction='row' spacing={2}>
            <Button size='small' href='https://www.facebook.com/' color='inherit'>Home</Button>
            <Button size='small' href='https://www.facebook.com/' color='inherit'>Features</Button>
            <Button size='small' href='https://www.facebook.com/' color='inherit'>About</Button>
            <Button size='small' color='inherit'>Resources</Button>
            <Button size='small' href='https://www.facebook.com/' color='inherit'>Download</Button>
        </Stack>
        <Menu open={open}>
          <MenuItem >Blog</MenuItem>
          <MenuItem >Podcast</MenuItem>
        </Menu>
      </Toolbar>

    </AppBar>
  )
}

export default MuiNavbar
