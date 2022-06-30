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
  console.log("meal id", props.mealInfo)

  const [ menu_url, setMenu_url ] = useState(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.mealInfo}`)
  const [ searchResult, setSearchResult ] = useState(null);


  const ViewRecipe = async ()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    try {
      const response = await fetch (`${menu_url}`, requestOptions);
      const data = await response.json(); //2s
      console.log("view recipe please", data)
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
        info={props.mealInfo}
      </CardContent>


      <CardActions>
        <Button 
          variant="contained"
          sx={{ px: 6, mx: 'auto' }}
        >
          View Recipe
          <button onClick={ViewRecipe} 
            type = "submit" 
          >
            recipe pls im begging
          </button>
          {/* <a href="#" class="recipe-btn">View Recipe</a> */}
        </Button>


        {/* <Typography
          justifyContent="center"
          alignItems="flex-start"
          color="red"
          variant="contained"
          sx={{ px: 47, mx: 'auto' }}
          >
          <input 
                value={SearchBar} 
                onChange={(inputTag)=>{setSearchBar(inputTag.target.value)}}
                type = "text" 
                class = "search-content"
                placeholder = "Enter ingredient" 
                id = "search-input">
          </input>
          <button onClick={searchIng} 
            type = "submit" 
            class = "search-btn btn" 
            id = "search-btn">
            <i class = "fa fa-search"></i>
            Search
          </button>
        </Typography> */}

          
      </CardActions>
    </Card>
  );
}

{/* <div class = "meal-card">
    <img class = "meal-img" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG" alt = "food"></img>
    <div class = "meal-content">
      <p>DESCRIPTION YADHKJFKLADJ;F</p>
      <p>words</p>
    </div>
    <div class="meal-info">
      <a href="#" class="recipe-btn">View Recipe</a>
    </div>
</div> */}