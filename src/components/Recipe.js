import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ModalContext } from '../context/ModalContext';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Recipe = ({recipe}) => {

    // todo START MODAL CODE 
    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // todo END MODAL CODE 

    let { idDrink, strDrink, strDrinkThumb } = recipe;

    const { setIdRecipe, recipeDetail, saveRecipeDetail } = useContext(ModalContext);


    const renderIngredients = (informacion) => {
        let ingredientes = [];

        for (let i = 0; i < 16; i++){

            if (informacion[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li key={`strIngredient${i}`}>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>
                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrinkThumb}`}/>
                <div className="card-body">
                    <button 
                        type="button" 
                        className="btn btn-block btn-primary"
                        onClick={ e => {
                            setIdRecipe(idDrink)
                            handleOpen()
                            
                        } }
                    >Ver Receta</button>
                    <Modal 
                        open={open} 
                        onClose={ e => {
                            handleClose();
                            setIdRecipe(null)
                            saveRecipeDetail('')
                        }}
                    >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">{strDrink}</h2>
                        <img className="img-fluid" src={strDrinkThumb} alt={strDrink}/>
                        <p id="simple-modal-description">
                            { recipeDetail.strInstructions }
                        </p>
                        <h2>Ingredientes y cantidades</h2>

                        { renderIngredients(recipeDetail) }
                    </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Recipe;