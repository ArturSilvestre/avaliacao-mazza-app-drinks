import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  a {
    text-decoration: none;
  }
  h1 {
    color: #7159c1;
    text-decoration: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  font-family: sans-serif
`;

export const Favotite = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #FFF;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;