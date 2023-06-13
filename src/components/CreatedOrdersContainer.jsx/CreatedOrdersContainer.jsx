import React, { useEffect, useState } from 'react';
import styles from './CreatedOrdersContainer.module.css';
import { useLocation } from 'react-router-dom';
import { Card, Container, Grid, Text, Col } from '@nextui-org/react';
const CreatedOrdersContainer = ({ token, user }) => {
  const [orders, setOrders] = useState();
  const location = useLocation();
  let { orderId } = location.state;
  const [itemQuantity, setItemQuantity] = useState();
  const getOrders = () => {
    fetch(`http://localhost:8080/api/orders/${user.sub}/details/${orderId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const createObject = (arrayOfArrays) => {
          const arrayOfObjects = [];
          if (arrayOfArrays === undefined) return console.log('undefined');
          for (let i = 0; i < arrayOfArrays.length; i++) {
            const array = arrayOfArrays[i];

            const newObj = {};

            newObj.clientName = array[0];
            newObj.orderId = array[1];
            newObj.date = array[2];
            newObj.status = array[3];
            newObj.productName = array[4];
            newObj.quantity = array[5];

            arrayOfObjects.push(newObj);
          }
          return arrayOfObjects;
        };
        const iQuantity = createObject(data[0]).reduce((acc, item) => {
          return acc + item.quantity;
        }, 0);
        setItemQuantity(iQuantity); 
        setOrders(createObject(data[0]));
      });
  };
  useEffect(() => {
    user.sub && getOrders();
  }, []);
  console.log(orders)
  return (
    <div className={styles.Main}>
      <Container>
        <Card>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                h1
                size={30}
                weight='bold'
                transform='uppercase'
                color='#ffffffAA'
              >
                Productos a enviar
              </Text>
              <Text h3 color='white'>
                Estarán saliendo de nuestras instalaciones en menos de 24 horas
              </Text>
              <Text h4 color='white'>
                Información:
              </Text>
              <Text h5 color='white'>
                Correo: {user && user.nombre}
              </Text>
              <Text h5 color='white'>
                Cantidad de items: {itemQuantity && itemQuantity}
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668622433/150800-dark-grey-diagonal-shiny-lines-background-vector-art-2955080594_ndnfs4.jpg'
            objectFit='cover'
            width='100%'
            height={340}
            alt='Card image background'
          />
        </Card>
      </Container>
      <div className={styles.Prod}>
        {orders &&
          orders.map((item, index) => {
            return (
              <Grid xs={6} sm={3} key={index}>
                <Card>
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
                    <Text h5 color='black'>
                      {item.productName}
                    </Text>
                  </Card.Footer>
                </Card>
              </Grid>
            );
          })}
      </div>
    </div>
  );
};

export default CreatedOrdersContainer;
