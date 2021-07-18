import React from 'react';

class Dinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      desiredRecipe: []
    };
  }

  makeApiCall = () => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=apples,+flour,+sugar&number=2`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            desiredRecipe: jsonifiedResponse
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
    const { error, isLoaded, desiredRecipe } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Recipes</h1>

          <h3>{desiredRecipe[0].title}</h3>

           {/* <ul>
            {desiredRecipe.map((recipes, index) =>
              <li key={index}>
                <h3>{recipes[0].title}</h3>
                 <p>{recipes.usedIngredients}</p> 
              </li>
            )}
           </ul>  */}

        </React.Fragment>
      );
    }
  }
}

export default Dinner;