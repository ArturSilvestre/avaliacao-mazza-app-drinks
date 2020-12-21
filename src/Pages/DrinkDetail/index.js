import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdFavorite  } from 'react-icons/md';
import api from '../../services/api';

import { DetailContainer } from './styles';

class DrinkDetail extends Component {
  state = {
    drink: [],
  }

  async componentDidMount() {
    const response = await api.get(`lookup.php?i=${this.props.match.params.id}`);
    this.setState({ drink: response.data.drinks[0]}) 
    console.log(this.state.drink)
  }

  handleAddDrink = drink => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_FAVORITE',
      drink,
    });
  };

  render() {
    const { drink } = this.state;

    if(!drink) return null;
 
    return (
      <DetailContainer>
       <li> 
        <img src={drink.strDrinkThumb} alt=""/> 
        <span>{ drink.strDrink }</span>
        <span>{drink.strCategory}</span>
        <span><small>Ingredientes: <br/></small> 
          {drink.strIngredient1} - {drink.strIngredient2} - {drink.strIngredient3}
        </span>
        
        <span><small>Tipo de Copo: {drink.strGlass} </small> 
        </span>
        <button type="button" onClick={() => this.handleAddDrink(drink)}>
          <div>
            <MdFavorite size={16} color="#FFF"/>
          </div>
          <span>
            Adicionar aos Favoritos
          </span>
        </button>
       </li>
      </DetailContainer>
    );
  }
}

export default connect()(DrinkDetail);