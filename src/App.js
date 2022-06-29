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
import { MenuItem } from '@mui/material';


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


function App() {

  // let animalData = "";  
  // console.log("before fetch");
  
  // fetch("https://your-url/stuff", requestOptions)
  // .then(response => response.text())
  // .then(result => {
  //   console.log("after fetch");
  //   animalData = result;
  //   console.log("animals JSON data", result)
  //   animalData = result;
  // })
  // .catch(error => console.log('error', error));

  const [ SearchBar, setSearchBar ] = useState('');
  const [ menu_url, setMenu_url ] = useState(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${SearchBar}`)
  const [ menu, setMenu ] = useState(null);
  const [ searchResult, setSearchResult ] = useState(null);
  const [ menuData, setMenuData ] = useState([]);


  const displayMenu = async () => {
    try {
      //before fetch
      const MENU_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${SearchBar}`
      const response = await fetch (`${MENU_URL}`, requestOptions);
      // console.log("before response", response);
      const data = await response.json();
      console.log("display menu", data);
      setMenu(data.meals);
      //setMenu(data.meals[0].strMeal);

    } catch (e) {
      console.log("my error", e)
    }
  }

  useEffect(() => {
    displayMenu();
  }, [searchResult])
  //doesn't iterate until searchResult changes

  const searchIng = async ()=>{
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

      {/* {console.log(menu)}
      {Object.values (menu).map((menu) => <p>{menu.name}</p>)} */}

    <section class = "recipes">

      {/* <RecipeCard>
        key = {recipe.strMeal}
        recipe = {recipe}
      </RecipeCard> */}

      <div class="meal-search-box">
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
            <i class = "fas fa-search"></i>
          </button>

      </div>
    </section>




      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid lightgray' }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Grub
          </Typography>
          <Button 
            href="#" 
            variant="outlined" 
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => alert("Boop!")}
          >
            this is a button
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4}}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2}}
        >
          Recipes
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          enter ingredient
        </Typography>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="lg">
        <Grid container 
          spacing={5} 
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* {characters.map((data, key) => {
            return (
              <Grid
              item
              key={key}
              xs={12}
              md={4}
              >
              <RecipeCard
                characterName={data.strMeal}
                pic={data.strMealThumb}
                // descriptionArray={data.description}
              />
            </Grid>
          ))} */}

          {menu && menu.map((data, key)=> {
            console.log("before return", data.strMeal, data.strMealThumb)
              return (
                <Grid
                item
                key={key}
                xs={12}
                md={4}
                >
                <RecipeCard
                characterName={data.strMeal}
                pic={data.strMealThumb}
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
