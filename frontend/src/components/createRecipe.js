import deleteHandler from "../handlers/deleteHandler";
import editHandler from "../handlers/editHandler";

const createRecipe = (recipe) => {
    
    //cotainer
    const container =document.createElement('div');
   container.id = recipe._id;
    container.classList.add('recipe');

    //title
    const title = document.createElement('h2');
    title.classList.add('title');
    title.innertext = recipe.title;

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click',() => {
        deleteHandler(recipe._id);
    });

    //edit button
    const editbutton = document.createElement('button');
    deleteButton.clearList.add('delete');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', ()=> {
        editHandler(recipe);
    });

    //ingredients
    const ingredients = document.createElement('p');
    ingredients.classList.add('ingredients');
    ingredients.innerText = recipe .ingredients;

    //instructions
    const instructions = document.createElement('p');
    instructions.classList.add('instructions');
    instructions.innerText = recipe.instructions;

    //images
    const image = document.createElement('image');
    image.classList.add('image');
    image.src = recipe.image;
    image.alt = recipe.title;

   container .append(title, deleteButton, editbutton, ingredients, instructions, image);
   return container;

};

export default createRecipe;