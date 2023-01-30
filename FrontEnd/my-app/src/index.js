import * as React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import {reportWebVitals} from "./reportWebVitals"
import App from './App'
import { store } from './app/store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
reportWebVitals()