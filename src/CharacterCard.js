import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CharacterCard(props) {
  // console.log("props", props)
  return (
    <Card>
      <CardMedia
        component="img"
        height="350px"
        image={props.strMealThumb}
      />
      <CardHeader
        title={props.strMeal}
        titleTypographyProps={{ align: 'center' }}
        sx={{ mt: 1 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <ul>
          {props.descriptionArray.map((sentence) => 
          <Typography component="li">
            {sentence}
          </Typography>
          )} 
        </ul>
      </CardContent>
      <CardActions>
        <Button 
          variant="contained"
          sx={{ px: 6, mx: 'auto' }}
        >
          View
          <a href="#" class="recipe-btn">View Recipe</a>
        </Button>
      </CardActions>
    </Card>
  );
}

<div class = "meal-card">
    <img class = "meal-img" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG" alt = "food"></img>
    <div class = "meal-content">
      <p>DESCRIPTION YADHKJFKLADJ;F</p>
      <p>words</p>
    </div>
    <div class="meal-info">
      <a href="#" class="recipe-btn">View Recipe</a>
    </div>
  </div>