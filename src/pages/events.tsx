import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Categories from '../components/pages/Home/Categories';
import Voucher from '../components/pages/Home/Voucher';
import Carousel from '../components/pages/Home/Carousel';
import PastEvents from '../components/pages/Home/pastEvents';
import UpcomingEvents from '../components/pages/Home/UpcomingEvents';
import { Container } from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Container>
        <Header isFixed />
        <Voucher />
        <Carousel />
        <UpcomingEvents />
        {/* <Categories /> */}
        <PastEvents />
        <MobileMenu />
      </Container>
    </>
  );
}
