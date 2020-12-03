import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [recipeid, setIdRecipe] = useState(null);
    const [recipeDetail, saveRecipeDetail] = useState('')

    useEffect(() => {
        ( async () => {

            if (!recipeid) return;

            let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeid}`;

            let recipeDetail = await axios.get(url);

            saveRecipeDetail(recipeDetail.data.drinks[0]);

        })()
    }, [recipeid])

    return (
        <ModalContext.Provider value={{ setIdRecipe, recipeDetail, saveRecipeDetail }}>
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;