import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as Redux from 'react-redux';
import store from '../../../redux/store';

const { Provider } = Redux;

describe('Header compnent', () => {
    it('Render component Logo', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const logo = screen.getByRole('logo');
        expect(logo).toBeInTheDocument()
    })

    it('Input value', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const products = [{ name: 'test' }, { name: 'phone' }, { name: 'cloud' }, { name: 'test' }];
        const seachHeader = screen.getByRole('seachHeader');

        const searchForProducts = () => {
            seachHeader.value = 'test';
            const filteredProducts = products.filter(product => {
                return product.name.toLowerCase().includes(seachHeader.value.toLowerCase())
            })
            expect(filteredProducts).toHaveLength(2)
            return filteredProducts;
        }

        const buttonSeachHeader = screen.getByRole('buttonSeachHeader');
        buttonSeachHeader.addEventListener('click', searchForProducts);
        buttonSeachHeader.click();
        expect(seachHeader.value).toBe('test')
    })

    it('Change button signin', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const signinButton = screen.getByLabelText('signin-btn');
        expect(signinButton).toBeInTheDocument()
    })

    it('Change button logout', () => {
        jest.spyOn(Redux, 'useSelector').mockReturnValueOnce({ userInfo: { isMock: true } });
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const logoutButton = screen.getByLabelText('logout-btn');
        expect(logoutButton).toBeInTheDocument()
    })
})
