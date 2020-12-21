import React from 'react';
import { connect } from 'react-redux';
import { 
  MdAddCircleOutline, 
  MdRemoveCircleOutline,  
  MdDelete } from 'react-icons/md';

import { Container, DrinkTable } from './styles';

 function Favorites({ favorites, dispatch }) {
  return (
    <Container>
      <DrinkTable>
        <thead>
          <tr>
            <th />
            <th>Drink</th>
            <th>Categoria</th>
            <th>Serve a pessoa</th>
            <th>Copo</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {favorites.map(drink => (
            <tr>
            <td>
              <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
            </td>
            <td>
              <strong>{drink.strDrink}</strong>
            </td>
            <td>
              <strong>{drink.strCategory}</strong>
            </td>
            <td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number"readOnly value={1} />
                <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
              <span>{ drink.strMeasure1 }</span>
            </td>
            </td>
            <td>
              <strong>{ drink.strGlass }</strong>
            </td>
            <td>
              <button 
                type="button" onClick={() => 
                  dispatch({ type: 'REMOVE_FROM_FAVOTITE', id: drink.idDrink })
                }
              >
                <MdDelete size={20} color="#7159c1"/>
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </DrinkTable>
    </Container>
  );
}

const mapStateToProps = state => ({
  favorites: state.favorite
});

export default connect(mapStateToProps)(Favorites);