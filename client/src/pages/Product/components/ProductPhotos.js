import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';

const ProductPhotos = ({ imageArr, }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Carousel
      ariaLabel='product-photos-slider'
      axis={isMobile ? 'vertical' : 'horizontal'}
      swipeable
      emulateTouch
      showArrows={!isMobile}
    >
      {imageArr?.map((image, index) => (
          <img key={index+image} src={image} alt='iphone' width='100%' height='100%' />
        ))}
    </Carousel>

  )
};

export default ProductPhotos
