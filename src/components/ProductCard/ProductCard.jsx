import React from 'react';
import styles from './ProductCard.module.css';
import { Text, Button } from '@nextui-org/react';
import CartIcon from '../Cart/CartIcon/CartIcon';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';

const ProductCard = ({
  id,
  image,
  brand,
  name,
  price,
  quantity,
  subtitle,
  description,
}) => {
  const navigate = useNavigate();
  const data = {
    id,
    image,
    brand,
    name,
    price,
    quantity,
    subtitle,
    description,
  };

  const clickHandler = () => {
    navigate(`/products/${id}`, { state: data });
  };

  return (
    <div onClick={clickHandler} className={styles.ProductCard__body}>
      <div className={styles.ProductCard__body_image}>
        <img
          alt='img'
          style={{
            width: '100%',
            height: '100%',
            minWidth: '15rem',
            minHeight: '1rem',
          }}
          loading={'lazy'}
          src={`${image}`}
        />
      </div>
      <div className={styles.ProductCard__body_content}>
        <div>
          <Text
            h1
            size={40}
            weight={'light'}
            css={{
              textAlign: 'center',
              textGradient: '0deg, grey 50%, black',
            }}
          >
            {brand}
          </Text>
        </div>
        <div>
          <Text
            h1
            size={30}
            css={{
              textAlign: 'center',
              textGradient: '180deg, grey 50%, black',
            }}
            weight='normal'
          >
            {name}
          </Text>
        </div>

        <div className={styles.ProductCard__body_content_shop}>
          <div>
            <Text h1 size={20} weight='light'>
              ${price} USD
            </Text>
          </div>
        </div>
        <Cart data={data} />
      </div>
    </div>
  );
};

export default ProductCard;
