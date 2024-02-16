import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [itemAmount, setItemAmount] = useState(0);

  //mehsulun ededini yenile
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //total qiymeti yenile

  useEffect(() => {
    if (cart) {
      const totalPrice = cart.reduce((acc, currentItem) => {
        return acc + currentItem.price * currentItem.amount;
      }, 0);
      setTotal(totalPrice);
    }
  });

  //sebete elave etmek funksiyasi
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    //yoxla eger varsa
    const cartItem = cart.find((item) => {
      return item._id === id;
    });

    //eger sebetde varsa
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item._id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item._id !== id;
    });
    setCart(newCart);
    localStorage.setItem("savedProducts", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("savedProducts");
  };

  const decreaseAmount = (id) => {
    const newCart = [...cart]
      .map((item) => {
        if (item._id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount > 0);
    setCart(newCart);
    localStorage.setItem("savedProducts", JSON.stringify(newCart));
  };

  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      if (item._id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
    localStorage.setItem("savedProducts", JSON.stringify(newCart));
  };

  const values = {
    cart,
    addToCart,
    itemAmount,
    total,
    clearCart,
    removeFromCart,
    decreaseAmount,
    increaseAmount,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;
