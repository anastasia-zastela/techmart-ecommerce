import Header from './Header';
import { act, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

test('Render Header and Logo', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const logo = document.getElementById('logo');
    expect(logo).toBeDefined()
})
