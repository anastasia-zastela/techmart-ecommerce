import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';
import Router from "./router/index";

function App() {
    return (
        <SimpleBar style={{ height: '100vh' }}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </SimpleBar>
    );
}

export default App;
