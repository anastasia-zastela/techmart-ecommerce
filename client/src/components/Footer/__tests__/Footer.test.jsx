import React from 'react';
import Footer from '../Footer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Footer component', () => {
    it('Render component Logo', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const logo = screen.getByRole('logo');
        expect(logo).toBeInTheDocument()
    })

    it('Input value', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const buttonSeachFooter = screen.getByRole('buttonSeachFooter');
        const seachFooter = screen.getByRole('seachFooter');
        const clickOnButtonEmailInput = () => {
            seachFooter.value = 'test'
            return seachFooter.value;
        }
        buttonSeachFooter.addEventListener('click', clickOnButtonEmailInput);
        buttonSeachFooter.click();
        expect(seachFooter.value).toBe('test')
    })
})
