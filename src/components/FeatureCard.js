funtion FeatureCard () {
    return (
                <div class="feature-card card-panel hoverable">
                    <div class="feature-content row">
                        <div class="feature-info col s12 m6">
                            <h2 class="feature-title">
                                RecipeBook
                            </h2>
                            <p class="feature-text ">
                                An online recipe book to view sand save your favorite recipes. This is a Heroku app built using Node.js, Express, Handlebars, Sequelize, Passport and Materialize.
                            </p>
                            <p class="feature-text">
                                The application allows the user to create an account, add recipes, view recipes, search stored recipes and print the recipe.
                            </p>
                        </div> 

                        <div class="feature-img col s12 m6">
                            <img class="card responsive-img" src="./assets/images/recipe-book.png" alt="recipe-book">
                        </div> 
                    
                    </div> 

                    <div class="card-action">
                        <a href="https://arcane-peak-55315.herokuapp.com/" target="_blank">Application</a>
                        <a href="https://github.com/kurtp23/recipe-book" target="_blank">GitHub Repository</a>
                    </div>
                </div> 
            </div>
    )
}