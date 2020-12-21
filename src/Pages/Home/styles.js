import styled from 'styled-components';

export const CategoryList = styled.ul`
  h2 {
    color: #FFF;
    text-transform: uppercase;
    font-family: sans-serif;
  }

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 15px;
    font-family: sans-serif;
    text-decoration: none;

    a {
      text-transform: uppercase;
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      text-decoration: none;
    }
  }
`;
