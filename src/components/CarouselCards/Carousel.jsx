import React, { useState } from 'react';
import shoppingInitialState from '../../../public/dataSet/file';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Card = ({ card }) => {
  const [showInternalCarousel, setShowInternalCarousel] = useState(false);

  const handleMouseEnter = () => setShowInternalCarousel(true);
  const handleMouseLeave = () => setShowInternalCarousel(false);

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-inner">
        <img src={card.imageSrc} alt={card.name} className="w-full max-h-64 object-cover" />
        {showInternalCarousel && (
          <Carousel className="internal-carousel" showArrows={true} showStatus={false} showThumbs={false} emulateTouch={true} autoPlay={true} interval={1000}>
            {card.additionalImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Additional ${index}`} />
              </div>
            ))}
          </Carousel>
        )}
        <div className="card-content">
          <h2 className="text-lg font-semibold mb-2 text-blue-500">{card.name}</h2>
          <span className="price-tag text-red-500 font-bold text-xl px-2 py-1 rounded-md bg-gray-200">${card.price}</span>
        </div>
      </div>
    </div>
  );
};

const CardCarousel = () => {
  const infiniteCards = [...shoppingInitialState, ...shoppingInitialState];
  const filteredCards = infiniteCards.filter((card) => card.price && card.price < 1000);

  return (
    <div className="carousel-container">
      <Carousel className="flex flex-wrap justify-center gap-4 sm:flex-col sm:gap-0 md:flex-row md:flex-wrap md:justify-start" showArrows={true} showStatus={false} showThumbs={false} emulateTouch={true} infiniteLoop={true} centerMode={true} centerSlidePercentage={20}>
        {filteredCards.map((card) => (
          <div key={card.id} className="w-full sm:w-auto md:w-1/3 lg:w-1/4 xl:w-1/6">
            <Card card={card} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
