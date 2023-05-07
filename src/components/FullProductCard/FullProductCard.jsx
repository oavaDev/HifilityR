import React from 'react';
import styles from './FullProductCards.module.css';
import { Text, Button } from '@nextui-org/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const data = [
  {
    _id: { $oid: '6457ec81c64ccd5dca320389' },
    image:
      'http://cdn.shopify.com/s/files/1/0040/7201/3924/products/7HZTimeless-2_3d709844-2bea-4125-938e-61febf3e320f_300x.jpg?v=1635258287',
    brand: '7HZ',
    name: 'Timeless',
    subtitle: '14.2mm Planar HiFi In-ear Earphone ',
    price: '109',
    description: [
      'Adopts Double-sided Array N52 Magnet and Ultra-thin Diaphragm',
      '14.2mm Planar Driver',
      'CNC Aluminum Shell',
      'Detachable MMCX Cable',
      'Lightweight and Comfortable',
    ],
    rating: ['20', '3'],
    createdAt: { $date: { $numberLong: '1667535709306' } },
    updatedAt: { $date: { $numberLong: '1667535709306' } },
    __v: { $numberInt: '0' },
  },
];
const { image, brand, name, subtitle, price, description } = data[0];

const ProductCards = () => {
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
        <div className={styles.cart_button}>
          <Button
            /* onClick={addOrderHandler} */
            className={styles.cart_button_button}
            flat
            auto
          >
            <AiOutlineShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
