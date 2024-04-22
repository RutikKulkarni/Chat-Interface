const initialState = {
    history: []
  };
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          history: [...state.history, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default chatReducer;
  