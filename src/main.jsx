import ReactDOM from 'react-dom/client'; //importo el objeto ReactDOM desde react-dom
import { App } from './App';

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement);

root.render(
<App />
)