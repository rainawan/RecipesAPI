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
import { makeStyles, MenuItem } from '@mui/material';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function App() {

  const [ SearchBar, setSearchBar ] = useState('');
  const [ menu_url, setMenu_url ] = useState(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${SearchBar}`)
  const [ menu, setMenu ] = useState(null);
  const [ searchResult, setSearchResult ] = useState(null);
  const [ menuData, setMenuData ] = useState([]);
  // const [ viewRecipe, setViewRecipe ] = useState([]);


  const fetchDishes = async () => {
    try {
      //before fetch
      const MENU_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${SearchBar}`
      const response = await fetch (`${MENU_URL}`, requestOptions);
      const data = await response.json();
      console.log("display menu", data);
      setMenu(data.meals);
    } catch (e) {
      console.log("my error", e)
    }
  }

  useEffect(() => {
    fetchDishes();
  }, [searchResult])
  //doesn't iterate until searchResult changes

  const searchIng = async () =>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    //start fetch with Ingredients
    try {
      const response = await fetch (`${menu_url}`, requestOptions);
      const data = await response.json(); //2s
      setSearchResult(data)
    } catch (e) {
      console.log("my error from searchIng", e)
    }
    //useState can be accessed everywhere in component

    console.log("get api data", SearchBar)

    //give the input to api
    //get the api data
    //display the data
  }

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
              value={SearchBar} 
              onChange={(inputTag)=>{setSearchBar(inputTag.target.value)}}
              type = "text" 
              class = "search-content"
              placeholder = "Enter ingredient" 
              id = "search-input">
          </input>
          <button onClick={() => searchIng()} 
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
          {menu && menu.map((data, key)=> {
            console.log("before return",data )
              return (
                <Grid
                item
                key={key}
                xs={12}
                md={4}
                >
                <RecipeCard
                mealName={data.strMeal}
                mealImg={data.strMealThumb}
                mealInfo={data.idMeal}
                mealLink={data.strSource}
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
