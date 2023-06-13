import React, { useEffect, useState } from 'react';
import styles from './CreatedOrders.module.css';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
const CreatedOrders = ({ token, user }) => {
  const [orders, setOrders] = useState();
  const navigate = useNavigate();
  const getOrders = () => {
    fetch(`http://localhost:8080/api/orders/client/${user.sub}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  };
  const clickHandler = (id, data) => {
    navigate(`/orders/created/${id}`, { state: data });
  };

  useEffect(() => {
    user.sub && getOrders();
    orders === undefined && user.sub === null && navigate('/orders');
  }, []);
  return (
    <div className={styles.Main}>
      {orders &&
        orders.map((item, index) => {
          return (
            <Grid xs={6} sm={3} key={index}>
              <Card isPressable onClick={() => clickHandler(item.orderId, item)}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={
                      'https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/657417-867137095_m1i39p.jpg'
                    }
                    objectFit='cover'
                    width='100%'
                    height={140}
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: 'flex-start' }}>
                  <Row wrap='wrap' justify='space-between' align='center'>
                    <Text b>Orden {item.orderId}</Text>
                    <Text
                      css={{
                        color: '$accents7',
                        fontWeight: '$semibold',
                        fontSize: '$sm',
                      }}
                    >
                      {item.price}
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
    </div>
  );
};

export default CreatedOrders;
