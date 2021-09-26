import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar.js';
import './styles.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
