import React from 'react';
import styles from './FullProductCard.module.css';
import { Text, Button } from '@nextui-org/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import Cart from '../Cart/Cart';

const ProductCards = () => {
  const location = useLocation();
  let { image, brand, name, price, subtitle, description } = location.state;
  description = description.split(',');
  return (
    <div className={styles.FullProductCard__body}>
      <div className={styles.FullProductCard__body_image}>
        {
          <img
            id='image'
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
        }
      </div>

      <div className={styles.FullProductCard__body_content}>
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
        <div>
          <Text
            h1
            size={18}
            weight={'light'}
            css={{
              textAlign: 'center',
              textGradient: '0deg, grey 50%, black',
            }}
          >
            {subtitle}
          </Text>
        </div>
        <div>
          {description.map((x, i) => {
            return (
              <Text
                key={i}
                h1
                size={12}
                weight={'light'}
                css={{
                  textAlign: 'center',
                  textGradient: '0deg, grey 50%, black',
                }}
              >
                {x}
              </Text>
            );
          })}
        </div>
        <div className={styles.FullProductCard__body_content_shop}>
          <div>
            <Text h1 size={20} weight='light'>
              ${price} USD
            </Text>
          </div>
        </div>
        <Cart data={location.state} />
      </div>
    </div>
  );
};

export default ProductCards;
