import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { CategoryList } from './styles';

export default class Home extends Component {
  state = {
    categories: [],
  }

  async componentDidMount() {
    const response = await api.get(`list.php?c=list`);
    console.log(response.data.drinks||[]);
    this.setState({ categories: response.data.drinks })
  }

  render() { 
    const { categories } = this.state;

    return (
      <>
        <CategoryList>
        <h2>Categorias de Drinks: </h2> 

          { categories.map(category => (
            <li key={category.strCategory}>
              <Link to={'/drinks?c='+category.strCategory}>
                <strong>{category.strCategory}</strong>
              </Link>
            </li>
          )) }
        </CategoryList>
      </>
    );
  }
}
