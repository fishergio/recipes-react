import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const RecipeContext = createContext()

const RecipeProvider = (props) => {

    const [recipes, saveRecipies] = useState([])
    const [search, searchRecipe] = useState({
        name: '',
        category: ''
    })

    const [isSearching, saveSearching] = useState(false)

    const { name, category } = search;

    useEffect(()=> {
        if (isSearching) {
            ( async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                
                let recipes = await axios.get(url)

                saveRecipies(recipes.data.drinks)
            })()
        }
    }, [search])

    return ( 
        <RecipeContext.Provider value={{ recipes, searchRecipe, saveSearching }}>
            {props.children}
        </RecipeContext.Provider>
     );
}
 
export default RecipeProvider;