import React from 'react';
import { Card, Text, Col } from '@nextui-org/react';
import styles from './RegularCard.module.css';
const RegularCard = ({ subtitle, title, img, footer, width, height }) => {
  return (
    <Card
      className={styles.RegularCard_body}
      css={{ w: `${width ? width : '100%'}`, h: `${height ? height : null}` }}
    >
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
            {subtitle}
          </Text>
          <Text h4 color='white'>
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={img}
        width='100%'
        height='100%'
        objectFit='cover'
        alt='Card image background'
      />
      {footer && (
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#0f111466',
            borderTop: '$borderWeights$light solid $gray800',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Text color='#c3c3c3'>{footer}</Text>
        </Card.Footer>
      )}
    </Card>
  );
};

export default RegularCard;
