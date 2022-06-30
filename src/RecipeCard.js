import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';


export default function RecipeCard(props) {
  // console.log("picture", props.pic)
  // console.log("meal id", props.mealInfo)

  const [ menu_url, setMenu_url ] = useState(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.mealInfo}`)
  const [ searchResult, setSearchResult ] = useState(null);
  
  const [recipe_url, setrecipe_url] = useState(null)

  useEffect(() => {
    ViewRecipe();
  }, [])
  
  
  const ViewRecipe = async ()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    try {
      const response = await fetch (`${menu_url}`, requestOptions);
      const data = await response.json(); //2s
      console.log("view recipe please", data.meals[0].strSource)
      setrecipe_url(data.meals[0].strSource)
      setSearchResult(data)
    } catch (e) {
      console.log("my error from searchIng", e)
    }
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="350px"
        image={props.mealImg}
      />
      <CardHeader
        title={props.mealName}
        titleTypographyProps={{ align: 'center' }}
        sx={{ mt: 1 }}
      />

      <CardContent sx={{ pt: 0 }}>
    
      </CardContent>

      {/* href={props.mealLink} */}

      <CardActions
      
      
      >

        {/* <a href={recipe_url}>view recipe</a> */}

            <Button href={recipe_url}
              variant="contained"
              type="submit"
              sx={{ px: 6, mx: 'auto' }}
            >
              View Recipe
            </Button>


      </CardActions>
    </Card>
  );
}