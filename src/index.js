import { createRoot } from 'react-dom/client'
import App from './app'

const root = createRoot(document.getElementById('root'))

root.render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <App />
)
