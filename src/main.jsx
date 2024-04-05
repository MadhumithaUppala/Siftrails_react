import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<><script src="https://unpkg.com/react@17.0.0/umd/react.development.js">
  </script><script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js">
    </script><script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    </>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
