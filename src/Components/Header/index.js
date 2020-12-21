import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdFavorite } from 'react-icons/md';

import { Container, Favotite } from './styles';

function Header({ favoriteSize }) {

  return (
    <Container>
      <Link to="/">
        <h1>DiY Drinks</h1> 
      </Link>

      <Favotite to="/favorite">
        <div>
          <strong>Drink favoritos</strong>
          <span>{favoriteSize} drinks</span>
        </div>
        <MdFavorite size={30} color="#FFF" />
      </Favotite>

    </Container>
  );
}

export default connect(state => ({
  favoriteSize: state.favorite.length,
}))(Header);