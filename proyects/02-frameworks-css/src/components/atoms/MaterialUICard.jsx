import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MaterialUICard() {
  return (
    <Card sx={{ maxWidth: 345, margin: '48px auto' }}>
      <CardMedia
        sx={{ height: 310 }}
        image="https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success">
          Share
        </Button>
        <Button size="small" variant="outlined" color="success">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
