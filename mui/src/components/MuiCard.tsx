import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

export default function MuiCard() {
  return (
    <Box width='300px'>
      <Card elevation={4}>
        <CardMedia 
        component='img'
        height='140'
        image='https://images.unsplash.com/photo-1493243350443-9e3048ce7288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3Rvcm18ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
        alt='Unsplash'/>
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
                React
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse earum iusto tempora nobis quibusdam eius voluptate magni ipsam nulla? Impedit reprehenderit autem labore aliquid non similique! Eos, officiis voluptatibus?
            </Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
