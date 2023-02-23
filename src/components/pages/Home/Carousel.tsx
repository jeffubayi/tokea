import { useState, useEffect } from 'react';
import api from '../../../services/api';
import { Container } from '../../../styles/components/pages/Home/Carousel';
import CarouselPlaceHolder from './placeholders/CarouselPlaceholder';

interface CarouselItem {
  image_url: string;
  alt: string;
}

const carrouselItems :CarouselItem[] = [
  {
    image_url: "https://tokeabucket.s3.us-east-2.amazonaws.com/THE+PODS+MUST+BE+CRAZY+1200x225_-01.jpg",
    alt: "good company"
  },
  {
    image_url: "https://tokeabucket.s3.us-east-2.amazonaws.com/sidebarBanner.jpeg",
    alt: "sidebar"
  },
  {
    image_url: "https://tokeabucket.s3.us-east-2.amazonaws.com/THE+PODS+MUST+BE+CRAZY+1200x225-01.jpg",
    alt: "drip fest"
  },
  {
    image_url: "https://tokeabucket.s3.us-east-2.amazonaws.com/Ms+Understood+Live+Tokea+Banner+(1).jpg",
    alt: "ms understood"
  },
  
]

export default function Carousel(): JSX.Element {
  // const [carrouselItems, setCarrouselItems] = useState<CarouselItem[]>([]);

  // useEffect(() => {
  //   async function loadCarousel() {
  //     const response = await api.get('headline');

  //     setCarrouselItems(response.data);
  //   }

  //   loadCarousel();
  // }, []);

  return (
    <Container id="items-wrapper">
      <div id="items">
        {carrouselItems.length === 0 ? (
          <CarouselPlaceHolder repeatCount={4} />
        ) : (
          carrouselItems.map(item => (
            <div className="item" key={item.alt}>
              <figure>
                <img src={item.image_url} alt={item.alt} />
              </figure>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}
