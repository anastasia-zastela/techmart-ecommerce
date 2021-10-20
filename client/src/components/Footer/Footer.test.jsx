import Footer from './Footer';
import { act, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

test('Render Footer', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })
})
