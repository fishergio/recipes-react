import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipeContext } from '../context/RecipeContext';

const Form = () => {

    const [search, saveSearch ] = useState({
        name: '',
        category: ''
    })

    const {categories} = useContext(CategoriesContext)
    const { searchRecipe, saveSearching } = useContext(RecipeContext);

    const getDataRecipe = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return ( 
        <form className="col-12" action="" onSubmit={ e => {
            e.preventDefault();
            searchRecipe(search);
            saveSearching(true);
        }}>
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Buscar por ingrediente"
                        onChange={getDataRecipe}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control" 
                        id=""
                        name="category"
                        onChange={getDataRecipe}
                    >
                        <option value="">-- Selecciona categoría --</option>
                        {categories.map(category => (
                            <option
                                value={category.strCategory}
                                key={category.strCategory}
                            >{category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Form;