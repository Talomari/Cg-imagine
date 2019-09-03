import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './Reducer';
import { createStore } from "redux"
import { Provider } from "react-redux"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/es/integration/react'
import App from './App'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['langReducer', 'userReducer', 'loggedIn']

}
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)
ReactDOM.render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();