import Header from './Header';
import { act, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

test('Render Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
})

test('Render Logo in Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const logo = document.getElementById('logoHeader');
    expect(logo).toBeDefined()
})

test('Link Logo in Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const logo = document.getElementById('logoHeader');
    expect(logo.href).toBe('http://localhost/')
})

test('Click Logo in Header', () => {
    const onClick = jest.fn()
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const logo = document.getElementById('logoHeader');
    logo.addEventListener('click', onClick)
    logo.click()
    expect(onClick).toHaveBeenCalled()
})

test('Render Seach in Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const seach = document.getElementById('seachHeader');
    expect(seach).toBeDefined()
})

test('SeachPlaceholder in Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const seach = document.getElementById('seachHeader');
    expect(seach.placeholder).toBe('Поиск')
})

test('Render buttonSeach in Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const button = document.getElementById('buttonSeachHeader');
    expect(button).toBeDefined()
})

test('OnClick buttonSeach in Header', () => {
    const onClick = jest.fn()
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const button = document.getElementById('buttonSeachHeader');
    expect(button).toBeDefined()
    button.addEventListener('click', onClick)
    button.click()
    expect(onClick).toHaveBeenCalled()
})

test('Click buttonSeach with and receive seachValue in Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const seach = document.getElementById('seachHeader');
    expect(seach).toBeDefined()
    const button = document.getElementById('buttonSeachHeader');
    expect(button).toBeDefined()
    const onClick = jest.fn(() => {
        seach.value = 'some product'
    })
    button.addEventListener('click', onClick)
    button.click()
    expect(onClick).toHaveBeenCalled()
    expect(seach.value).toBe('some product')
})

test('Render Cart in Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const cart = document.getElementById('cartHeader');
    expect(cart).toBeDefined()
})

test('Link Cart in Header', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    const cart = document.getElementById('cartHeader');
    expect(cart.href).toBe('http://localhost/cart')
})