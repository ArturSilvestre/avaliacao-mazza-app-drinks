import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { DrinkList } from './styles';

export default class Drinks extends Component {
  state = {
    drinks: [],
  }

  async componentDidMount() {
    const params = new URLSearchParams(this.props.location.search); 
    const category = params.get('c');
    const response = await api.get(`filter.php?c=${category}`);
    this.setState({ drinks: response.data.drinks||[] })
  }
  render() {
    const { drinks } = this.state;

    return (
      <>
        <DrinkList>
          <h2>Tipos de Drinks:</h2>

          { drinks.map(drink => (
            <li key={drink.idDrink}>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />  
              <Link to={`/drinks/${drink.idDrink}`}>
                <strong>{drink.strDrink}</strong>
                <button>
                  <span>
                    Ver Detalhes
                  </span>
                </button>
              </Link>
            </li>
          )) }

        </DrinkList>

      </>
    );
  }
}