import React from "react";
import { useState } from "react";
import { WishList } from "./components/WishList";
import { Item } from "./types/item";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([
    { name: "hey", url: "https://www.google.com", price: 3.05 },
    { name: "hey2", url: "https://www.google.com", price: 40.0 },
    { name: "hey3", url: "https://www.google.com", price: 80.99 },
  ]);
  const [item, setItem] = useState<Item>({
    name: "",
    url: "",
    price: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item);
    setItems((items) => [...items, item]);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={item.url}
          onChange={(e) =>
            setItem((prev: Item) => ({ ...prev, url: e.target.value }))
          }
        />
        <button type="submit" />
      </form>
      <h1>Wishlist</h1>
      <WishList items={items} />
    </>
  );
}

export default App;
