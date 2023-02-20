import { useEffect, useState } from 'react';
import { Container } from '../../../styles/components/pages/Home/Famous';
import Restaurant from './Events';

import api from '../../../services/api';
import RestaurantPlaceHolder from './placeholders/RestaurantPlaceholder';

interface IRestaurant {
  id: number;
  title: string;
  image_url: string;
  category: string;
  distance: number;
  start_time: number;
  end_time: number;
  rating: number;
}

export default function Famous() {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('restaurants');

      setRestaurants(response.data);
    }

    loadRestaurants();
  }, []);

  return (
    <Container className="scroll-box">
      <header>
        <h4>Past Events</h4>
        <a href="#">See more</a>
      </header>
      <div role="list" className="scroll-box__wrapper">
        {restaurants.length === 0 ? (
          <RestaurantPlaceHolder repeatCount={5} isFamousContainer />
        ) : (
          restaurants.map(restaurant => (
            <Restaurant
              key={restaurant.title}
              restaurantData={restaurant}
              isFamousContainer
            />
          ))
        )}
      </div>
    </Container>
  );
}
