import { useCallback } from 'react';
import { connect, MapStateToProps, useDispatch } from 'react-redux';
import { formatPrice } from '../utils/format';
import { IState } from '../store';
import { removeFoodFromCartSuccess } from '../store/ducks/cart';
import { ICartItem } from '../store/ducks/cart/types';

import { Container } from '../styles/components/FloatingBox';
import Empty from './Empty';
import { toggleModal } from '../store/ducks/foodModal';

interface IFloatingBoxProps {
  open?: boolean;
  items?: ICartItem[];
  total?: number;
}

function FloatingBox({ open, items, total }: IFloatingBoxProps) {
  const dispatch = useDispatch();

  const handleRemoveFoodFromCart = useCallback(
    (foodId: string) => {
      dispatch(removeFoodFromCartSuccess(foodId));
    },
    [dispatch],
  );

  const handleToggleModal = useCallback(
    (foodId: string, food_quantity: number) => {
      dispatch(toggleModal(foodId, food_quantity));
    },
    [dispatch],
  );

  return (
    <Container open={open}>
      {items.length === 0 ? (
        <>
          <Empty />
          <h3>No events booked yet</h3>
          <span>Purchase a ticket</span>
        </>
      ) : (
        <>
          <table>
            {items.map(item => (
              <>
                <header>
                  <span>Your order</span>
                  <h1>{item.food.title}</h1>
                  <h2> #{item.restaurant_slug}</h2>
                </header>
                <main key={item.food.id}>
                  <div className="flex-items">
                    <span>
                    Number of persons: {item.quantity}
                    </span>
                    <strong>{item.subtotal}</strong>
                  </div>
                  <footer className="actions">
                    <button
                      type="button"
                      className="edit-action"
                      onClick={() =>
                        handleToggleModal(item.food.id, item.quantity)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveFoodFromCart(item.food.id)}
                    >
                      Remove
                    </button>
                  </footer>
                </main>
              </>
            ))}

            <div>
              <span>Subtotal</span>
              <span>{total}</span>
            </div>

            <div>
              <span>Discount</span>
              <span>25%</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>{total}</strong>
            </div>

            <button type="button" className="submit-button">
              Confirm Payment
            </button>
          </table>
        </>
      )}
    </Container>
  );
}

const mapStateToProps: MapStateToProps<any, any> = (state: IState) => ({
  items: state.cart.items.map(item => ({
    ...item,
    subtotal: formatPrice(item.quantity * item.food.price),
    subtotal_number: item.quantity * item.food.price,
  })),
  total: formatPrice(
    state.cart.items.reduce((total, item) => {
      return total + item.food.price * item.quantity;
    }, 0),
  ),
  // orders: state.cart.orders.map(order => ({
  //   ...order,
  //   subtotal: order.items.reduce((total, item) => {
  //     return item.quantity * item.food.price;
  //   }, 0),
  // })),
});

export default connect(mapStateToProps)(FloatingBox);
