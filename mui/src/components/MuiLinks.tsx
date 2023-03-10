import React from 'react'
import { Stack, Link, Typography } from '@mui/material'


const MuiLinks = () => {
  return (
    <Stack direction='row' spacing={2}>
      <Link href='#'>link</Link>
      {/* You can also select any color and set underline to none hover and more */}
      <Link href='#' color='secondary' underline='none'>secondary</Link>


      {/* You can wrap the links in typography elements to change its size through typography variants */}

      <Typography variant='h4'>
        <Link href='#' underline='none'>Typography Link</Link>
      </Typography>
    </Stack>
  )

}

export default MuiLinks
