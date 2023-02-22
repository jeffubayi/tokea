import { useEffect, useState } from 'react';
import { Container } from '../../../styles/components/pages/Home/Famous';
import Event from './Event';

import api from '../../../services/api';
import EventPlaceHolder from './placeholders/RestaurantPlaceholder';
import {EventType} from '../../../services/types'

export default function Famous() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('pastEvents');
      console.log(`eventpast`,response.data)
      setEvents(response.data);
    }

    loadEvents();
  }, []);

  return (
    <Container className="scroll-box">
      <header>
        <h4>Past Events</h4>
        <a href="#">See more</a>
      </header>
      <div role="list" className="scroll-box__wrapper">
        {events.length === 0 ? (
          <EventPlaceHolder repeatCount={5} isFamousContainer />
        ) : (
          events.map(event => (
            <Event
              key={event.title}
              eventData={event}
              isFamousContainer
            />
          ))
        )}
      </div>
    </Container>
  );
}
