import React from 'react';
import styled from 'styled-components';
import hamburger from './assets/hamburger.png'
import { Header, AppNameComponent, AppIcon, SearchComponent, SearchInput } from './components/headerComponent';
import {RecipeContainer, CoverImage, RecipeName,IngredientsText, SeeMoretext} from './components/recipeComponents';
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

  return (
      <Container>
      <Header>
        <AppNameComponent><AppIcon src={hamburger} alt="" /></AppNameComponent>
        <SearchComponent>
          <SearchInput placeholder='Search Recipe' type="text" />
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
