import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import Header from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import FoodModal from '../../components/pages/Restaurant/FoodModal';
import MenuCategory from '../../components/pages/Restaurant/MenuCategory';
import useWindowSize from '../../hooks/useWindowDimensions';
import api from '../../services/api';
import { useCallback } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/ducks/foodModal';
import {
  Container,
  RestaurantHeader,
  MenuContainer,
  MenuCategoriesContainer,
  Menu
} from '../../styles/pages/Restaurant';
import { EventDetail } from "../../services/types"

interface IRestarauntProps {
  restaurant: EventDetail;
}

export default function RestaurantPage({ restaurant }: IRestarauntProps) {
  const router = useRouter();
  const { width } = useWindowSize();
  const dispatch = useDispatch();


  const handleToggleModal = useCallback(
    (foodId: string) => {
      dispatch(toggleModal(foodId));
    },
    [dispatch],
  );

  return (
    <>

      <Container cover_image_url={restaurant?.cover_image_url}>
        {width >= 960 ? (
          <Header />
        ) : (
          <RestaurantHeader cover_image_url={restaurant?.cover_image_url}>
            <button
              onClick={() => {
                router.back();
              }}
              type="button"
            >
              <FiChevronLeft size={30} color="#FFF" />
            </button>

            <FiSearch size={23} color="#FFF" />
          </RestaurantHeader>
        )}

        {restaurant && (
          <>
            <Head>
              <title>
                {restaurant.title}
              </title>
            </Head>
              <img
                src={restaurant.cover_image_url}
                alt="cover"
                className="cover-image"
              />
            <main>
              <div>
                <span />
                <main>
                  {width < 960 && (
                    <img src={restaurant.image_url} alt={restaurant.title} />
                  )}
                </main>
                <span>
                  <FaCalendarAlt fill="#DC2626" size={15} />
                  <p className="starred">{restaurant.date}</p>
                </span>
              </div>
              <h1>{restaurant.title}</h1>
              <h2 > {restaurant.venue}</h2>
              <h3>
              {restaurant.description}
              </h3>
            </main>
          </>
        )}

        <MenuContainer>
          <MenuCategoriesContainer>
            <ul>
              <li className="active">
                <h3>Tickets</h3>
              </li>
              <li className="disabled">
                <h3>Event Organizers</h3>
              </li>

            </ul>
          </MenuCategoriesContainer>

          <Menu>
            {restaurant.end_time == 0 && (
              <>
                <button type="button" onClick={() => handleToggleModal(restaurant.id)}>Purchase Ticket</button>
                <FoodModal />
              </>
            )}
            <MenuCategory category_title="Similar Events" />
          </Menu>
        </MenuContainer>

        <MobileMenu />
        <div style={{marginTop:"3 rem"}}></div>
      </Container >
    </>
  );
}

export const getServerSideProps: GetServerSideProps<IRestarauntProps> = async context => {
  const { restaurant_slug } = context.params;

  const response = await api.get(`events?id=${restaurant_slug}`);

  const restaurant = response.data[0];

  return {
    props: {
      restaurant,
    },
  };
};
