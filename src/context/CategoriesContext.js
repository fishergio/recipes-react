import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

// todo create context
export const CategoriesContext = createContext();

// todo Provider es donde se encuentran las funciones y state
const CategoriesProvider = (props) => {

    // todo crear state del context
    const [categories, saveCategories] = useState([]);

    useEffect(() => {
        ( async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            let categories = await axios.get(url)
            
            saveCategories(categories.data.drinks)
        })()
    }, [])

    return <CategoriesContext.Provider
        value={{
            categories
        }}
    >
        {props.children}
    </CategoriesContext.Provider>
}

export default CategoriesProvider