

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'; 

const reviewsList = [
  
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Courtney Costrino',
    companyName: 'Founder, Noble Tide LLC',
    description:
      'I was afraid to pay thousands for  a logo that didnot turn out right for my business. The Brandmark team helped me create a logo that I love!',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sarah Locatelli',
    companyName: 'Founder, Loctia',
    description:
      'Iam not designed, when I had to make a logo I found myself starting at a blank screen, Brandmark made the process actually enjoyable',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Valentyna Kuzmych',
    companyName: 'CEO, PubLaw Project',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
];

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="carousel-section">
            <Slider {...settings}>
                {reviewsList.map((review, index) => (
                    <div key={index} className="carousel-slide">
                        <div className="carousel-image-container">
                        <img src={review.imgUrl} alt={review.username} className="carousel-image" />
                        </div>
                    
                        <div className="carousel-caption">
                            <h3 className="carousel-username">{review.username}</h3>
                            <p className="carousel-company">{review.companyName}</p>
                            <p className="carousel-description">{review.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ImageCarousel;
