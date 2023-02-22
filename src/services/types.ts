export interface EventType {
  id: number;
  title: string;
  image_url: string;
  venue: string;
  category: number;
  amount: number;
  end_time: number;
  date: string;
}

export interface EventProps {
  eventData?: {
    id?: number;
    title: string;
    image_url: string;
    venue: string;
    category: number;
    amount: number;
    end_time: number;
    date: string;
  };
  isFamousContainer?: boolean;
  loading?: boolean;
}

export interface  EventDetail {
  id: string;
  image_url: string;
  cover_image_url: string;
  description?: string;
  title: string;
  venue: string;
  date: string;
  amount: string;
  distance: number;
  start_time: number;
  end_time: number;
}
