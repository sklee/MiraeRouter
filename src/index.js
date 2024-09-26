import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

// Redux
import { Provider } from 'react-redux'

// Pages
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    // <Provider>
      <App />
    // </Provider>
)

reportWebVitals()
