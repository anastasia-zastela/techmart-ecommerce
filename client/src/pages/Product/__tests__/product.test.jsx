import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Product from '../Product';
import GarantyIcon from '../../../components/icons/GarantyIcon';
import CheckCircleIcon from '../../../components/icons/CheckCircleIcon';
import store from '../../../redux/store';

const phone = {
  colors: ['white', 'black', '#215787', '#C7F3BD', '#E70012'],
  memory: [64, 128, 256],
};
const renderComponent = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Product />
    </Provider>
  </BrowserRouter>
);

describe('Test Product', () => {
  it('Smoke test for Product', () => {
      render(renderComponent());
  });

  it('Smoke test for GarantyIcon', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product>
            <GarantyIcon />
          </Product>
        </Provider>
      </BrowserRouter>,
    );
  });

  it('Smoke test for CheckCircleIcon', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product>
            <CheckCircleIcon />
          </Product>
        </Provider>
      </BrowserRouter>,
    );
  });

  it('Check array in received params colors', () => {
    render(
      // renderComponent(),
      <BrowserRouter>
      <Provider store={store}>
        <Product />
      </Provider>
    </BrowserRouter>
    );
    
    
    // const btnColor =  screen.getByLabelText('btnColor0');
    const btnColor = screen.queryAllByRole('button')
    
    const mockProductColors = [{ color: 'red' }, { color: 'blue' }];
    //const color = 'red'
    // const choseProduct = mockProductColors.find((prod) => prod.color === color);
    const changeProd = (color) => {
      const choseProduct = mockProductColors.find((prod) => prod.color === color);
      expect(choseProduct.color).toBe('red')
    };
    // const mockFn = jest.fn();
    btnColor.forEach((btn)=> btn.click(changeProd('red')));
    
    
    // btnColor.click(mockFn('red'));
    // expect(mockFn).toHaveBeenCalled()
      
      expect(mockProductColors.length).toBe(2);
    ;
  });

  it('It map colors from objects', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product />
        </Provider>
      </BrowserRouter>,
    );
    const mockProductColors = [{ color: 'red' }, { color: 'blue' }];
    const colors = mockProductColors.map((el) => el.color)

    expect(colors[0]).toBe('red');
    expect(['red', 'blue']).toEqual(expect.arrayContaining(colors));
    expect(colors.length).toBe(2);
  });

  it('Check historyPush', () => {
    // render(
    //   renderComponent(),
    // );
    const mockHistoryPush = jest.fn();
const mockId = 1;
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: mockHistoryPush,
      }),
    }));
  
       /* const {queryAllByRole} = */ render(
          <BrowserRouter>
          <Provider store={store}>
            <Product />
          </Provider>
        </BrowserRouter>
        );
        const btnColor = screen.queryAllByRole('button')
        btnColor.forEach((b) => fireEvent.click(b))
        expect(mockHistoryPush).toHaveBeenCalledWith(mockId);
        ;
        //expect(mockHistoryPush).toHaveBeenCall();
        
  
  });

// it('Rendering block if enabled is true', () => {
//   render(
//     renderComponent(),
//   );
//   const enabled = true;
//   const container = screen.getByLabelText('container');
//   enabled ? expect(container).toBeDefined() : expect(container).not.toBeDefined();
// });

  it('Check array in received params memory', () => {
    render(
      renderComponent(),
    );
    expect([64, 128, 256]).toEqual(expect.arrayContaining(phone.memory));
    expect([64, 128]).not.toEqual(expect.arrayContaining(phone.memory));
  });

  it('OnClick button Buy in Product', () => {
   
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product />
        </Provider>
      </BrowserRouter>,
    );

    const button = screen.getByRole('buyBtn');
    expect(button).toBeDefined();
    const mockFn = jest.fn();
        button.click(mockFn());
        expect(mockFn).toHaveBeenCalled();
  });

  it('OnClick button Buy in Credit in Product', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product />
        </Provider>
      </BrowserRouter>,
    );

    const button = screen.getByRole('btnBuyInCredit');
    expect(button).toBeDefined();
    const mockFn = jest.fn();
    button.click(mockFn());
    expect(mockFn).toHaveBeenCalled();

  });
});
