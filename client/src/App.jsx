import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './styles.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';

function App() {
    return (
        <SimpleBar style={{ height: '100vh' }}>
            <BrowserRouter>
                <Header />
                <NavBar />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </SimpleBar>
    );
}

export default App;
