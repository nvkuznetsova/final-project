import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import { HashRouter } from 'react-router-dom';
import { createStore,  applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const store = createStore(
    reducer, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));



ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, document.getElementById('root'));

module.hot.accept();