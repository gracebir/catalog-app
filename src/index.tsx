import ReactDOM from 'react-dom/client';
import App from './App';
import { Globalstyled } from './Globalstyled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Globalstyled/>
    <App />
  </>
);
