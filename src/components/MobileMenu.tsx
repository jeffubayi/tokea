import { FiHome, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { Container } from '../styles/components/MobileMenu';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function MobileMenu() {
  const { width } = useWindowDimensions();

  return (
    <>
      {width >= 960 ? (
        <> </>
      ) : (
        <Container>
          <div>
            <a>
              <FiHome size={20} color="#3e3e3e" />
              <span>Home</span>
            </a>
            <a>
              <FiSearch size={20} />
              <span>Search</span>
            </a>
            <a>
              <FiShoppingCart size={20} />
              <span>Booking</span>
            </a>
            <a>
              <FiUser size={20} />
              <span>Profile</span>
            </a>
          </div>
        </Container>
      )}
    </>
  );
}
