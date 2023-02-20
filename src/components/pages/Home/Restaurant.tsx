import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import { Container } from '../../../styles/components/pages/Home/Restaurant';

interface IRestaurantProps {
  restaurantData?: {
    id: number;
    title: string;
    image_url: string;
    category: string;
    distance: number;
    start_time: number;
    end_time: number;
    rating: number;
    price?: string;
  };
  isFamousContainer?: boolean;
  loading?: boolean;
}

export default function Restaurant({
  restaurantData,
  isFamousContainer,
  loading,
}: IRestaurantProps) {
  const {
    image_url,
    title,
    category,
    rating,
    distance,
    start_time,
    end_time,
    price,
  } = restaurantData;

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
          <Link href={`/restaurant/${title}`}>
            <div>
              <figure>
                <img src="https://res.cloudinary.com/vaspro/image/fetch/w_512,h_512,c_fill/https://tokeabucket.s3.us-east-2.amazonaws.com/Toxic+Valentine.png" alt={title} />
              </figure>
              <aside />
              <main>
                <h5>{title}</h5>
                <span>
                  <FaCalendarAlt fill="#DC2626" size={12} />
                  <p className="starred">{rating}</p>
                  &nbsp;• {category} • {distance} km
                </span>
                <button style={{ padding: "6px", fontSize: "12px" }} type="button">Buy Ticket</button>
              </main>
            </div>
          </Link>
        </Container>
      )}
    </>
  );
}
