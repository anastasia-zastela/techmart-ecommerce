import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar.js';
import './styles.css';
import SimpleBarReact from 'simplebar-react';
import "simplebar/src/simplebar.css";

function App() {
    return (
        <SimpleBarReact style={{ height: '100vh', width: '100%' }}>
            <BrowserRouter>
                <Header />
                <NavBar />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </SimpleBarReact>
    );
}

export default App;
