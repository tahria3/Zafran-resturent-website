export interface MenuItem {
  id: string;
  name: string;
  nameBn: string;
  category: string;
  categoryBn: string;
  price: number;
  spicyLevel: number;
  isChefSpecial: boolean;
  isHalal: boolean;
  isVegetarian: boolean;
  calories: string;
  prepTime: string;
  description: string;
  descriptionBn: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface ReservationData {
  id?: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  tableType: string;
  specialRequests?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface RestaurantInfo {
  name: string;
  nameBn: string;
  tagline: string;
  taglineBn: string;
  address: string;
  addressBn: string;
  phone: string;
  reservationLine: string;
  email: string;
  hours: {
    lunch: string;
    dinner: string;
    weekendHours: string;
  };
  tablesAvailableTotal: number;
  seatingTypes: Array<{
    id: string;
    label: string;
    desc: string;
  }>;
}
