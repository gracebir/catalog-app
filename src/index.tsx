import ReactDOM from 'react-dom/client';
import App from './App';
import { Globalstyled } from './Globalstyled';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Globalstyled/>
    <Router>
      <App />
    </Router>
  </>
);
