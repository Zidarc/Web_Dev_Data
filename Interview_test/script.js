// Sample data for recipes
let recipes = [
    { name: "Spaghetti Carbonara", ingredients: "Spaghetti, Eggs, Pancetta, Parmesan Cheese, Black Pepper"},
    { name: "Chicken Alfredo", ingredients: "Chicken, Fettuccine Pasta, Heavy Cream, Parmesan Cheese, Garlic" },
    { name: "Chocolate Chip Cookies", ingredients: "Flour, Sugar, Butter, Chocolate Chips, Vanilla Extract" },
];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById("recipe-list");

    // Clear the existing list
    recipeList.innerHTML = "";

    // Loop through the recipes and create list items
    recipes.forEach((recipe, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>Ingredients: ${recipe.ingredients}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(listItem);
    });
}

// Function to add a new recipe
function addRecipe() {
    let recipeName = document.getElementById("recipeNameInput");
    recipeName = recipeName.value;
    if (recipeName) {
        let recipeIngredients = document.getElementById("recipeItemInput");
        recipeIngredients = recipeIngredients.value;
        if (recipeIngredients) {
            const newRecipe = {
                name: recipeName,
                ingredients: recipeIngredients,
            };
            recipes.push(newRecipe);
            displayRecipes();
        }
    }
}

// Function to delete a recipe
function deleteRecipe(index) {
    if (confirm("Are you sure you want to delete this recipe?")) {
        recipes.splice(index, 1);
        displayRecipes();
    }
}
const myButton = document.getElementById("addRecipeButton");

myButton.addEventListener("click", function() {
    addRecipe(); // Call the function you defined earlier
});
// Initial display of recipes
displayRecipes();
