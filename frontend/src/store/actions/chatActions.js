import axios from 'axios';

export const sendMessage = (prompt) => async (dispatch) => {
  try {
    const response = await axios.post('/api/chat', { prompt });
    dispatch({ type: 'SEND_MESSAGE', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
