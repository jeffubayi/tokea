import { useState, useEffect } from 'react';
import api from '../../../services/api';
import { Container } from '../../../styles/components/pages/Home/Carousel';
import CarouselPlaceHolder from './placeholders/CarouselPlaceholder';

interface CarouselItem {
  image_url: string;
  alt: string;
}

const carrouselItems : CarouselItem[]= [{
  image_url: "https://tokeabucket.s3.us-east-2.amazonaws.com/Ms+Understood+Live+Tokea+Banner+(1).jpg",
  alt: "ms understood"
},
{
  image_url: "https://tokeabucket.s3.us-east-2.amazonaws.com/tokea_wide_dripfest_1.png",
  alt: "drip fest"
},
{
  image_url: "https://tokeabucket.s3.us-east-2.amazonaws.com/Ms+Understood+Live+Tokea+Banner+(1).jpg",
  alt: "ms understood"
},
{
  image_url: "https://tokeabucket.s3.us-east-2.amazonaws.com/tokea_wide_dripfest_1.png",
  alt: "drip fest"
},
]
export default function Carousel(): JSX.Element {

  return (
    <Container id="items-wrapper">
      <div id="items">
        {carrouselItems.length === 0 ? (
          <CarouselPlaceHolder repeatCount={4} />
        ) : (
          carrouselItems.map(item => (
            <div className="item" key={item.alt}>
              <figure>
                <img
                  src={item.image_url}
                  alt={item.alt}
                />
              </figure>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}
