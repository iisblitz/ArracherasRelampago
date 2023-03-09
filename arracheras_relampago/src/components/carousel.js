import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true}>
      <div>
        <img src="https://picsum.photos/800/300/?random" alt="random1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/301/?random" alt="random2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/302/?random" alt="random3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

