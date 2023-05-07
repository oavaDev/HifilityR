import React from 'react';
import styles from './ProductCard.module.css';
import { Text, Button } from '@nextui-org/react';
import CartIcon from '../CartIcon/CartIcon';

const ProductCard = ({ image, brand, name, price }) => {
  return (
    <div className={styles.ProductCard__body}>
      <div
        /* onClick={() => router.push(`/products/${id}`)} */
        className={styles.ProductCard__body_image}
      >
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
        <div className={styles.cart_button}>
          <Button
            /* onClick={addOrderHandler} */
            className={styles.cart_button_button}
            color={'black'}
            auto
            flat
            /* as={Link} */
          >
            <CartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
