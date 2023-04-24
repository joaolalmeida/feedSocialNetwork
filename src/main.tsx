import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render( //Colocar o ponto de exclamação ! para forcar o typescript a entender que existe o elemento
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
