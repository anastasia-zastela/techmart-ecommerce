import React from "react";
import Footer from './Footer';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe('Footer compnent', () => {
    it('function on button seach work', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const logo = document.getElementById('logo');
        expect(logo).toBeDefined()
    })
    it('input value', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const buttonSeachFooter = document.getElementById('buttonSeachFooter');
        const seachFooter = document.getElementById('seachFooter');
        const clickOnButtonEmailInput = () => {
            seachFooter.value = 'test'
            return seachFooter.value;
        }
        buttonSeachFooter.addEventListener('click', clickOnButtonEmailInput);
        buttonSeachFooter.click();
        expect(seachFooter.value).toBe('test')
    })
})