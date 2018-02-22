import App from './../src/containers/App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './../src/reducers';

import './style.scss';

const middleware:any = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
<Provider store={store}>
	<App/>
</Provider>,
 document.getElementById('app'));



// For hot reloading
declare var module: any;
module.hot.accept();
