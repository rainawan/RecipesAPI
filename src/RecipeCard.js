import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';


export default function RecipeCard( {mealName, mealImg, mealId, mealLink} ) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="350px"
        image={mealImg}
      />
      <CardHeader
        title={mealName}
        titleTypographyProps={{ align: 'center' }}
        sx={{ mt: 1 }}
      />

      <CardActions
      
      >

        {

          mealLink ? 
          <Button
              variant="contained"
              type="submit"
              sx={{ px: 6, mx: 'auto' }}
              onClick={() => console.log("Clicked", mealLink) }
            >
              <a href={mealLink}>View Recipe</a>
            </Button> : null
        }
            

      </CardActions>
    </Card>
  );
}