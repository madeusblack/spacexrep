const reducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_PAGE':
      return {
        ...state,
        actualPage: action.payload,
      };
    case 'SET_ITEMS_PER_PAGE':
      return {
        ...state,
        itemsPerPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
