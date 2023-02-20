import { useCallback, useState } from 'react';
import {
  FiHome,
  FiChevronDown,
  FiUser,
  FiShoppingBag,
  FiPercent,
} from 'react-icons/fi';
import { Container } from '../styles/components/Menu';
import FloatingBox from './FloatingBox';
import useGeolocation from '../hooks/useGeolocation';

export default function Categories() {
  const [openOption, setOpenOption] = useState(false);

  const toggleOption = useCallback(() => {
    setOpenOption(!openOption);
  }, [openOption]);

  const { address } = useGeolocation();

  return (
    <Container>
      <aside>
        <div>
          <button type="button">
            <FiUser size={25} />
            <h5>Login</h5>
          </button>
        </div>
        <div>
          <button type="button" onClick={toggleOption}>
            <FiShoppingBag size={25} />
            <h5>Booked events</h5>
          </button>
          <FloatingBox open={openOption} />
        </div>
      </aside>
    </Container>
  );
}
