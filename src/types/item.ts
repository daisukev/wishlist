export interface Item {
  name: string;
  url: string;
  price: number;
}

export interface ItemsProps {
  items: Item[];
}
