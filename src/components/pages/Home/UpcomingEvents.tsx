import { useEffect, useState } from 'react';

import { Container } from '../../../styles/components/pages/Home/SuggestedRestaurants';
import Event from './Event';
import {EventType} from '../../../services/types'
import api from '../../../services/api';
import EventPlaceHolder from './placeholders/RestaurantPlaceholder';

export default function UpcomingEvents() {
  const [events, setEvents] = useState<EventType[]>([]);
  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('upcomingEvents');
  console.log(`eventUp`,events)
      setEvents(response.data);
    }

    loadEvents();
  }, []);

  return (
    <Container>
      <div>
        <h4>Upcoming Events</h4>

        <ul>
          {events.length === 0 ? (
            <EventPlaceHolder repeatCount={9} isFamousContainer={false} />
          ) : (
            events.map(event => (
              <li key={event.title}>
                <Event eventData={event} />
              </li>
            ))
          )}
        </ul>
        {/* <button type="button">View upcoming events</button> */}
      </div>
    </Container>
  );
}
