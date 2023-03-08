import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

const MuiNavbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>POKEMON</Typography>

        <Stack direction='row' spacing={2}>
            <Button size='small' href='https://www.facebook.com/' color='inherit'>Home</Button>
            <Button size='small' href='https://www.facebook.com/' color='inherit'>Features</Button>
            <Button size='small' href='https://www.facebook.com/' color='inherit'>About</Button>
            <Button size='small' href='https://www.facebook.com/' color='inherit'>Download</Button>
        </Stack>
      </Toolbar>

    </AppBar>
  )
}

export default MuiNavbar
