import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './redux/todo/App';
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
