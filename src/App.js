import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';
import CategoriesProvider from './context/CategoriesContext';
import RecipeProvider from './context/RecipeContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <RecipeProvider>
      <CategoriesProvider>
        <ModalProvider>
          <Fragment>
            <Header/>

            <div className="container mt-5">
              <div className="row">
                <Form/>
              </div>
              <RecipesList />
            </div>
          </Fragment>
        </ModalProvider>
      </CategoriesProvider>
    </RecipeProvider>
  );
}

export default App;
