import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
