import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import AppExercicio from './AppExercicio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppExercicio />
  </StrictMode>,
)
