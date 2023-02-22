import Restaurant from '../Event';

interface IPlaceHolderProps {
  repeatCount: number;
  isFamousContainer: boolean;
}

export default function RestaurantPlaceHolder({
  repeatCount,
  isFamousContainer,
}: IPlaceHolderProps) {
  const howMany = Array.from(Array(repeatCount).keys());

  const restaurantData = {
    id: 0,
    title: '',
    image_url: '',
    venue: '',
    category: 0,
    amount: 0,
    end_time: 0,
    date:"",
  };

  return (
    <>
      {howMany.map(placeholder => (
        <Restaurant
          key={placeholder}
          isFamousContainer={isFamousContainer}
          loading
          eventData={restaurantData}
        />
      ))}
    </>
  );
}
