import './styles/index.scss'
import { StrictMode } from 'react'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { store } from './app/store.ts'
import { App } from './App.tsx'
import 'react-toastify/dist/ReactToastify.css'
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>
)
