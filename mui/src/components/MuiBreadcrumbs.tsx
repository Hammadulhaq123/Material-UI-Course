import React from 'react'
import { Box, Breadcrumbs, Link, Typography} from '@mui/material'
import { NavigateNext } from '@mui/icons-material'

const MuiBreadcrumbs = () => {
  return (
    <Box>
        {/* Items after collapse and itemsBeforeCollapse are props used to show item after or befire ellipses */}
        <Breadcrumbs aria-aria-label='breadcrumbs' maxItems={3} separator={<NavigateNext fontSize='small' />} sx={{background: '#000', color:'white'}} itemsAfterCollapse={2}>
            <Link underline='hover' href="#">Home</Link>
            <Link underline='hover' href="#">Categories</Link>
            <Link underline='hover' href="#">Men</Link>
            <Link underline='hover' href="#">Shoes</Link>
            <Typography color='text.primary'>
                Adidas
            </Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
