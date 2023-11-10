import { ItemsProps } from "../types/item";
export const WishList: React.FC<ItemsProps> = ({ items }) => {
  return (
    <>
      {items?.map((item) => (
        <div key={item.url + item.price}>
          {item.name} - {item.url}
        </div>
      ))}
    </>
  );
};
