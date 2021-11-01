import React from "react";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { RecipeListContainer, AddRecipeButton } from "./styled";
import {Add} from '@material-ui/icons'
import { GoToAddRecipes, GoToDetail } from "../../routes/Coordinator";
import { useHistory } from "react-router";


const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickCard = (id) => {
        GoToDetail(history, id)
    }

    const recipeCards = recipes.map((recipe)=>{
        return (
            <RecipeCard
            key={recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClick={()=> onClickCard(recipe.recipe_id)}
            />
        )
    })
    
    
    return(
        <RecipeListContainer>
            {recipeCards}
            <AddRecipeButton
            color={"primary"}
            onClick={()=> GoToAddRecipes(history)}
            ><Add/>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}
export default RecipesListPage