import Footer from './Footer';
import { act, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

test('Render Footer and Logo', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })
    const logo = document.getElementById('logo');
    expect(logo).toBeDefined()
})
