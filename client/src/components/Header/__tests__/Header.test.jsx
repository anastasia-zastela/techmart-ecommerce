import React from 'react';
import Header from '../Header';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Header compnent', () => {
    it('Render Header and Logo', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const logo = document.getElementById('logo');
        expect(logo).toBeDefined()
    })
    it('input value', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const products = [{ name: 'test' }, { name: 'phone' }, { name: 'cloud' }, { name: 'test' }];
        const seachHeader = document.getElementById('seachHeader');

        const searchForProducts = () => {
            seachHeader.value = 'test';
            const filteredProducts = products.filter(product => {
                return product.name.toLowerCase().includes(seachHeader.value.toLowerCase())
            })
            expect(filteredProducts).toHaveLength(2)
            return filteredProducts;
        }

        const buttonSeachHeader = document.getElementById('buttonSeachHeader');
        buttonSeachHeader.addEventListener('click', searchForProducts);
        buttonSeachHeader.click();
        expect(seachHeader.value).toBe('test')
    })
})
