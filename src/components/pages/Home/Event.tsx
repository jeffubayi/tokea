import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import { Container } from '../../../styles/components/pages/Home/Restaurant';
import {EventProps} from '../../../services/types';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../store/ducks/foodModal';


export default function Restaurant({
  eventData,
  isFamousContainer,
  loading,
}: EventProps) {
  const {
    id,
    image_url,
    title,
    venue,
    category,
    amount,
    date,
    end_time,
  } = eventData;
  const dispatch = useDispatch();


  const handleToggleModal = useCallback(
    (foodId: any) => {
      event.stopPropagation();
      dispatch(toggleModal(foodId));
    },
    [dispatch],
  );

  return (
    <>
      {loading ? (
        <Container isFamousContainer={isFamousContainer}>
          <div>
            <figure>
              <Skeleton width={86} height={86} />
            </figure>
            <aside />
            <main>
              <h5>
                <Skeleton width={90} height={20} />
              </h5>
              <span>
                <Skeleton width={175} height={20} />
              </span>
              <span>
                <Skeleton width={70} height={20} />
              </span>
            </main>
          </div>
        </Container>
      ) : (
        <Container isFamousContainer={isFamousContainer}>
          <Link href={`/event/${id}`}>
            <div>
              <figure>
                <img src={image_url} alt={title} />
              </figure>
              <aside />
              <main>
                <h5>{title}</h5>
                <span>
                  <FaCalendarAlt fill="#DC2626" size={12} />
                  <p className="starred">{date}</p>
                  &nbsp;• {venue} 
                </span>
                {end_time == 0 ? <button style={{ padding: "6px", fontSize: "12px" }}  onClick={() => handleToggleModal(id)} type="button">Buy Ticket</button>:<span/>}
              </main>
            </div>
          </Link>
        </Container>
      )}
    </>
  );
}
