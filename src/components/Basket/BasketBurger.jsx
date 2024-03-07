import React, { useContext, useState } from 'react';
import {
  BtDeleteOrder,
  BurgImgOrder,
  BurgNameOrder,
  BurgPriceOrder,
  BurgerCardOrder,
  CountBasketWrap,
  CounterOrder,
  InTotalItem,
  InfoBasketWrap,
} from './Burger.styled';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { BsTrash3Fill } from 'react-icons/bs';
import { BasketContext } from './ProductProvider';

export default function BasketBurger({ item }) {
  const { goods, setGoods } = useContext(BasketContext);
  const [count, setCount] = useState(item.count);
  item.count = count;
  console.log('count', count);
  console.log('item', item.count);

  // let count = item.count;
  // const toggleCount = () => {
  //   // setCount(item.count + 1);
  //   setCount(count + 1);
  // };

  // useEffect(() => {
  //   toggleCount();
  // }, [toggleCount]);

  const handleIncrement = () => {
    // console.log(evt.currentTarget.id);
    // const idx = evt.currentTarget.id;

    setCount(count + 1);
    item.count = count;
    console.log('count', count);
    console.log('item', item.count);

    // item.count = item.count + 1;
    // goods.map(item => item.count + 1)
  };

  const handleDecrement = () => {
    item.count = setCount(count - 1);
  };
  // console.log(count);

  // const amount = useMemo(() => Number(item.price * item.count), [item]);
  const amount = Number(item.price * item.count);
  console.log('amount', amount);

  const handleDeleteLikes = evt => {
    const index = Number(evt.currentTarget.id);
    let arr = goods.filter(item => item.id !== index);
    setGoods(arr);
  };
  return (
    <BurgerCardOrder id={item.id}>
      <InfoBasketWrap>
        <BtDeleteOrder type="button" onClick={handleDeleteLikes} id={item.id}>
          <BsTrash3Fill className="icon-delete-favor" />
        </BtDeleteOrder>
        <BurgImgOrder src={item.images[0].sm} alt={item.name} />
      </InfoBasketWrap>
      <BurgNameOrder>{item.name}</BurgNameOrder>
      <CountBasketWrap>
        <div className="wrap-btn">
          <button
            id={item.id}
            className="btn-counter"
            onClick={handleIncrement}
          >
            <FiPlus className="icon-count" />
          </button>
          <button
            className="btn-counter"
            type="button"
            disabled={item.count === 1}
            onClick={handleDecrement}
          >
            <FiMinus className="icon-count" />
          </button>
        </div>
        <CounterOrder>{item.count}</CounterOrder>
        <BurgPriceOrder>{item.price.toFixed(2)}</BurgPriceOrder>
        <InTotalItem>{(item.price * item.count).toFixed(2)}</InTotalItem>
      </CountBasketWrap>
    </BurgerCardOrder>
  );
}
