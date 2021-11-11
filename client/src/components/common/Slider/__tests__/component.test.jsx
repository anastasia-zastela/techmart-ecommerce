import { render } from '@testing-library/react';

import { Carousel } from 'react-responsive-carousel';

describe('Test Product', () => {
  it('Smoke test for Slider', () => {
    render(<Carousel />);
  });

  it('Slider to be defined', () => {
    render(<Carousel />);
    const slider = document.querySelector('.carousel-root');
    expect(slider).toBeDefined();
  });
});
