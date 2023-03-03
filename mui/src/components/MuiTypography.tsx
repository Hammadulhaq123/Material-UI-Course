import React from 'react'
import { Typography } from '@mui/material'






const MuiTypography = () => {
  return (
    <div>

        {/* Typography variants from h1 till h6 represents Headings just like html but it has some styling in built */}
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

        {/* By using the component prop we can change the components styling like we can use h1 variant with the same styling as h4 by simply writing the component prop to h4 */}
        <Typography variant='h4' component='h1'>Component Tag</Typography>

        {/* You can use the gutterbottom prop to give margin at the bottom of a typography element */}
        <Typography variant='h2' gutterBottom>GutterBottom</Typography>


        {/* Typography variant subtitle1 and subtitle2 represent h6 with slightly different stlying than h6 of variant h6. It has smaller font size than the h6 */}
      <Typography variant='subtitle1'>Subtitle1</Typography>
      <Typography variant='subtitle2'>Subtitle2</Typography>


        {/* Typography variant body1 is the default variant if you don't write any variant it will still use body1 by default*/}
      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem veniam dolor placeat odio distinctio eius officia deleniti a, enim quidem, dolore, minus fugiat adipisci sequi? Obcaecati doloremque dolorem quos tempore!</Typography>
      {/* Typography variant body2 is slightly different variant then body1 it has slightly smaller font size */}
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem veniam dolor placeat odio distinctio eius officia deleniti a, enim quidem, dolore, minus fugiat adipisci sequi? Obcaecati doloremque dolorem quos tempore!</Typography>


    </div>
  )
}

export default MuiTypography
