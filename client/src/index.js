import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component5 from './Component5';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
        
            <Routes>
                <Route path={"/"} element={< Component2 />}></Route>
                <Route path={"/Component1"} element={<Component1 />}> </Route>
                <Route path={"/Component5"} element={<Component5 />}> </Route>
                <Route path={"/Component3/:id"} element={<Component3 />}> </Route>
            </Routes>
        </BrowserRouter> 
       
    </>
)   
