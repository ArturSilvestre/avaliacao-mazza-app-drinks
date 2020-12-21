export default function favorite(state = [], action) {
  console.log('teste', state, action);
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return [ ...state, action.drink ];
    default:
      return state;
  }
} 