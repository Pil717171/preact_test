const ACTION_HANDLERS = {
  
};


const initialState = {
  currentCurrency: 'BTCUSDT',
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
