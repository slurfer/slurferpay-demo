import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMoney from './Pages/AddMoney';
import Home from './Pages/Home';
import InitCard from './Pages/InitCard';
import ShowBalance from './Pages/ShowBalance';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/showBalance"
                        element={<ShowBalance />}
                    />
                    <Route path="/init" element={<InitCard />} />
                    <Route
                        path="/addMoney"
                        element={<AddMoney mode="add" />}
                    />
                    <Route
                        path="/subsMoney"
                        element={<AddMoney mode="subs" />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
