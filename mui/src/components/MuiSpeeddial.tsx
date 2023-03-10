import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import { Edit, FileCopy, Print, Share } from '@mui/icons-material'
const MuiSpeeddial = () => {
  return (
    <SpeedDial ariaLabel='Naviagation on speed dial' sx={{position: 'absolute', bottom: 16, right: 16}} icon={<SpeedDialIcon openIcon={<Edit />} />}>
      <SpeedDialAction icon={<FileCopy />} tooltipTitle='Copy' tooltipOpen/>
      <SpeedDialAction icon={<Print />} tooltipTitle='Paste' tooltipOpen/>
      <SpeedDialAction icon={<Share />} tooltipTitle='Share'/>
    </SpeedDial>
  )
}
export default MuiSpeeddial
