import { createRoot } from 'react-dom/client';
import App from './components/app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const ToDoApp = (
  <div>
    <App />
  </div>
);

root.render(ToDoApp);
