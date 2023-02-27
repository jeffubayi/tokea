import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { connect, MapStateToProps, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { IState } from '../../../store';
import { addFoodToCartRequest } from '../../../store/ducks/cart';
import { IFood } from '../../../store/ducks/cart/types';
import { toggleModal } from '../../../store/ducks/foodModal';
import {
  Container,
  Button,
} from '../../../styles/components/pages/Restaurant/FoodModal';
import { formatPrice } from '../../../utils/format';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    padding: '0',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
  },
};

Modal.setAppElement('#__next');

interface IModalProps {
  foodId?: string;
  food_quantity?: number;
  toggled?: boolean;
}

interface IFoodLocal extends IFood {
  formattedPrice: string;
}

function FoodModal({ foodId, food_quantity, toggled }: IModalProps) {
  const [modalIsOpen, setIsOpen] = useState(toggled);
  const [food, setFood] = useState<IFoodLocal>({} as IFoodLocal);
  const [foodQuantity, setFoodQuantity] = useState(food_quantity);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    setIsOpen(toggled);
  }, [toggled]);

  useEffect(() => {
    async function loadFood() {
      const { data } = await api.get<IFood>(`similarEvents/${foodId}`);

      const food = {
        ...data,
        formattedPrice: formatPrice(data.price),
      };

      setFood(food);
    }

    if (foodId) {
      loadFood();
    }
  }, [foodId]);

  const handleAddFoodToCart = useCallback(
    (food: IFood) => {
      if (foodQuantity !== 0) {
        const { restaurant_slug } = router.query;
        dispatch(addFoodToCartRequest(food, restaurant_slug, foodQuantity));
        toast.success(`${food.title} Added to booked events`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [dispatch, router.query, foodQuantity],
  );

  const handleIncrement = useCallback(() => {
    setFoodQuantity(foodQuantity + 1);
  }, [setFoodQuantity, foodQuantity]);

  const handleDecrement = useCallback(() => {
    setFoodQuantity(foodQuantity === 0 ? foodQuantity : foodQuantity - 1);
  }, [setFoodQuantity, foodQuantity]);

  const handleToggleModal = useCallback(
    (foodId?: string) => {
      dispatch(toggleModal(foodId));
    },
    [dispatch],
  );

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => handleToggleModal()}
      style={customStyles}
      onAfterClose={() => setFoodQuantity(0)}
    >
      <Container submitButtonDisabled={foodQuantity === 0}>
        <aside>
          <img src={food.image_url} alt={food.title} className="blur" />
          <img src={food.image_url} alt={food.title} className="food-cover" />
        </aside>
        <main>
          <header>
            <FiX size={25} color="#666" onClick={() => handleToggleModal()} />
          </header>
          <div>
            <h1>{food.title}</h1>
            <p>{food.description}</p>
            <strong></strong>
            <div className="comments">
              <p>Ticket type:</p>
              <select >
                <option value="">Select Ticket …</option>
                <option value="1000">DIE HARD</option>
                <option value="1500">ADVANCED</option>
                <option value="2000">GATE</option>
              </select>
            </div>
           <p style={{maxWidth:"300px"}}>By registering and/or purchasing these ticket(s) you are agreeing to be bound by Tokea's Terms & Conditions, and by the Privacy Policy.
              Tickets are subject to change without notice under event organizers advisory
              The organizer of this event has a no-refund and ticket change policy</p>
          </div>
          <footer>
            <div>
              <Button
                type="button"
                onClick={handleDecrement}
                disabledField={foodQuantity === 0}
              >
                <FiMinus fill=" #ea1d2c" size={20} />
              </Button>
              <input type="number" readOnly value={foodQuantity} />
              <Button type="button" onClick={handleIncrement}>
                <FiPlus fill=" #ea1d2c" size={20} />
              </Button>
            </div>

            <button
              type="button"
              className="buy-action"
              onClick={() => handleAddFoodToCart(food)}
            >
              <span>Book event</span>
              <span>{formatPrice(foodQuantity * food.price)}</span>
            </button>
          </footer>
        </main>
      </Container>
    </Modal>
  );
}

const mapStateToProps: MapStateToProps<any, any> = (state: IState) => ({
  toggled: state.foodModal.toggled,
  foodId: state.foodModal.foodId,
  food_quantity: state.foodModal.food_quantity,
});

export default connect(mapStateToProps)(FoodModal);
