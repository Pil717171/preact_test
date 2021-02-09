import './style'
import { h, render } from 'preact'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/app'


function init() {
    let App = require('./components/app').default
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.body
    )
  }
  
  init()
