import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';
import RecipeCard from './RecipeCard';
import characters from './protagonists.json'
import { useEffect, useState } from 'react';
import { findDOMNode } from 'react-dom';
import { display } from '@mui/system';
import { makeStyles, MenuItem, responsiveFontSizes } from '@mui/material';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function App() {

  // 2 endpoints, meals ids by search query, meal info by id
  // 1) get dishes ids and images
  // 2) for each dish id, call the api to get the info for the specific dish


  // 1) Display Default Recipes
  // 2) Search Ingredient
  // 3) Display Ingredient Recipes

  const [ searchQuery, setSearchQuery ] = useState('');
  const [ meals, setMeals ] = useState([]);

  // console.log(meals);


  const searchMealsByQuery = () => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`;
  
  const searchMealById = (mealId) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const fetchDishes = async () => {
    try {
      //before fetch
      const menuUrl = searchMealsByQuery();
      const response = await fetch(`${menuUrl}`, requestOptions);
      const data = await response.json();
      const mealsData = data.meals.slice(0, 20);

      console.log(mealsData)
      // Goal: Fetch data for each meal


      // get the promises

      const meals = []
      for (const {idMeal, strMeal, strMealThumb} of mealsData) {

        // build one meal object
        // console.log(idMeal, strMeal, strMealThumb);
        const mealUrl = searchMealById(idMeal);
        // console.log(url)

        const response = await fetch(mealUrl);
        const data = await response.json();
        const recipeUrl = data.meals[0].strSource;

        const meal = {
          name: strMeal,
          image: strMealThumb,
          recipeUrl: recipeUrl
        }

        meals.push(meal)


        // const data = await mealPromise.json();
        



        // What url do you want to fetch from
        // request from the url
        // get response
        // get data from response
        // console.log(response);
        // const data = await response.json();
        // console.log(data);

        // const name = searchMealsByQuery(strMeal);

      }

      setMeals(meals);


      // const meals = await Promise.all(mealPromises);

      // for (const response of meals) {
        
      // }

      // const recipeUrl = data.meals[0].strSource;


      // Use the promises
      /*
      name
      image
      recipeUrl
      */



      // console.log("display menu", mealData);




      // setMeals(mealData.meals);
    } catch (e) {
      console.log("my error", e)
    }
  }

  useEffect(() => {
    fetchDishes();  
  }, [])

  // const handleSubmit = () => {
  //   fetchDishes();
  // };
  //doesn't iterate until searchResult changes


 
  return (
    <div className="App">
      <CssBaseline />

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '5px solid black' }}
      >
      </AppBar>

      <Container maxWidth="md" sx={{ my: 4}}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          // sx={{ px: 45}}
          style = {{fontFamily: 'Titan One'}}
          color="#663300"
          fontSize={130}
        >
          GRUB
          
        </Typography>

        <Typography
          justifyContent="center"
          alignItems="flex-start"
          align="center"
          variant="contained"
          sx={{ px: 43, mx: 'auto' }}
          style = {{fontFamily: 'Poppins'}}

          >
          <input 
              value={searchQuery} 
              onChange={(inputTag)=>{setSearchQuery(inputTag.target.value)}}
              type = "text" 
              class = "search-content"
              placeholder = "Enter ingredient" 
              id = "search-input">
          </input>
          {/* <button onClick={() => fetchIngredients()}  */}
          <button onClick={() => fetchDishes()} 
              type = "submit" 
              class = "search-btn btn" 
              id = "search-btn">
              <i class = "fa fa-search"></i>
              Search
          </button>
          {/* style = {{font-family: 'Poppins', sans-serif;}} */}


        </Typography>

        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ mx: 10, fontWeight: 'bold', fontSize: 30}}
        >
          ---SPICE UP YOUR MEALS---
        </Typography>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="lg">
        <Grid container 
          spacing={5} 
          justifyContent="center"
          alignItems="flex-start"
        >
          {meals && meals.map((meal, key)=> {
            // console.log("before return",data )
              return (
                <Grid
                item
                key={key}
                xs={12}
                md={4}
                >
                <RecipeCard
                // props are static (constant within the component); name, img, link
                // state is dynamic (within the component); seachQuer
                mealName={meal.name}
                mealImg={meal.image}
                mealLink={meal.recipeUrl}
                >
                </RecipeCard>
                </Grid>
              )
          })}
        </Grid> 
      </Container>
    </div>
  );
}

export default App;
