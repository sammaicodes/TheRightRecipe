import React from 'react';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ingredients: []
    };
  }

  makeApiCall = () => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?api-key=${process.env.REACT_APP_API_KEY}&ingredients=apples,+flour,+sugar&number=2`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            ingredients: jsonifiedResponse.recipes
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  componentDidMount() {
    this.makeApiCall()
  }

  render() {
    const { error, isLoaded, ingredients } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Recipes</h1>
          <ul>
            {ingredients.map((recipes, index) =>
              <li key={index}>
                <h3>{recipes.title}</h3>
                <p>{recipes.usedIngredients}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Recipes;