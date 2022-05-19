import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { defaultDependencies, DungeonsAndDragonsContext } from './context/context';
import Home from './pages/home/home';
import SpellsList from './pages/spells/spells-list/spells-list';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <DungeonsAndDragonsContext.Provider value={ defaultDependencies }>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="" element={<Home />} />
                        <Route path="spells" element={<SpellsList /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DungeonsAndDragonsContext.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
