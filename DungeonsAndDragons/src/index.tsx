import { createStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { defaultDependencies, DungeonsAndDragonsContext } from './context/context';
import Home from './pages/home/home';
import SpellDetails from './pages/spells/spell-details/spell-details';
import { SpellsList } from './pages/spells/spells-list/spells-list';
import rootReducer from './reducers/favourites';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <DungeonsAndDragonsContext.Provider value={defaultDependencies}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="" element={<Home />} />
                            <Route path="spells" element={<SpellsList />} />
                            <Route path="spells/:index" element={<SpellDetails />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </DungeonsAndDragonsContext.Provider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
