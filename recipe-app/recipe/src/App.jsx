import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import hamburger from './assets/hamburger.png'
import { Header, AppNameComponent, AppIcon, SearchComponent, SearchInput } from './components/headerComponent';
import {RecipeContainer, CoverImage, RecipeName,IngredientsText, SeeMoretext} from './components/recipeComponents';
import axios from 'axios';


const APP_ID = "a392a591";
const APP_KEY = "80e28a425e5eaa996f19f49c145b8d99";


const Container = styled.div`
display: flex;
flex-direction: column;
`;

const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
`;




function App() {

  const [timeoutId, updateTimeoutId] = useState();


  const fetchRecipe = (searchString) => {
   axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
   ).then(function (response) {
    console.log(response);
   })
  }

  const onTextChange = (e) => {
    clearTimeout();
   const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
   updateTimeoutId(timeout)
  }

  return (
      <Container>
      <Header>
        <AppNameComponent><AppIcon src={hamburger} alt="" /></AppNameComponent>
        <SearchComponent>
          <SearchInput placeholder='Search Recipe' onChange={onTextChange}/>
        </SearchComponent>
      </Header>
      <RecipeListContainer>
      <RecipeContainer>
        <CoverImage src={hamburger}/>
        <RecipeName>Jelo</RecipeName>
        <IngredientsText>prvi button</IngredientsText>
        <SeeMoretext>recept</SeeMoretext>
      </RecipeContainer>
      </RecipeListContainer>
    </Container>
  )
}

export default App
