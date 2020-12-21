import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  paddin: 30px;
  background: #FFF;
  border-radious: 4px;
`;

export const DrinkTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  } 
  
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }
  footer {
    margin-top: 2px;
    width: 100%;

    button {
      padding: 9px;
      background: #7159c1;
      color: #FFF;
      text-transform: uppercase;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      font-weight: bold;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')}
      }
    }
  }
`;