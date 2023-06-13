import React, { useState } from 'react';
import { itemsInCart, addToOrder } from '../../store/slices/orderSlice';
import { useSelector } from 'react-redux';
import { Grid, Card, Text, Row, Button } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { removeFromOrder } from '../../store/slices/orderSlice';
import styles from './CartPreview.module.css';
import Empty from '../Empty/Empty';
const CartPreviewCard = ({ token, user }) => {
  const list = useSelector(itemsInCart);
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removeFromOrder(id));
  };

  const addToOrderHandler = (item) => {
    fetch('http://localhost:8080/api/order/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        clientId: user.sub,
        status: '1',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        return fetch('http://localhost:8080/api/productOrder/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify({
            orderId: data.orderId,
            productId: item.id,
            quantity: item.quantity,
          }),
        })
          .then((response) => response.json())
          .catch((error) => {
            console.error('Error:', error);
          });
      });
  };
  const deleteAll = () => {
    list.map((item) => {
      const id = item.id;
      dispatch(removeFromOrder({ ...item, id }));
    });
  };
  async function makeOrder(list, orderId) {
    for (let i = 0; i < list.length; i++) {
      fetch('http://localhost:8080/api/productOrder/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          orderId: orderId,
          productId: list[i].id,
          quantity: list[i].quantity,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (i === list.length - 1) {
            deleteAll();
          }
        });
    }
  }
  const addAllToOrderHandler = () => {
    let globalOrderId = 0;
    fetch('http://localhost:8080/api/order/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        clientId: user.sub,
        status: '1',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        globalOrderId = data.orderId;
        makeOrder(list, globalOrderId);
      });
  };

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch(addToOrder({ ...item, quantity }));
  };

  return (
    <div className={styles.Main}>
      <div className={styles.cartAddButton}>
        <Button onClick={() => addAllToOrderHandler()} color='success'>
          Agregar todo a la orden
        </Button>
      </div>
      <div className={styles.Cart_prod}>
        {list[0] ? (
          list.map((item, index) => (
            <Grid className={styles.prod} key={index}>
              <Card>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={item.image}
                    objectFit='cover'
                    width='100%'
                    height={140}
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer
                  css={{
                    justifyItems: 'flex-start',
                    backgroundColor: '#f5f5f5',
                  }}
                >
                  <Row wrap='wrap' justify='space-between' align='center'>
                    <Text style={{ color: '#171717' }} b>
                      {item.brand + ' ' + item.name}
                    </Text>
                    <Text
                      css={{
                        color: '$accents7',
                        fontWeight: '$semibold',
                        fontSize: '$sm',
                      }}
                    >
                      {item.price + ' $'}
                    </Text>
                    <Grid
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '1rem',
                      }}
                    >
                      <Button
                        onClick={() => removeHandler(item.id)}
                        shadow
                        size={'xs'}
                        color={'error'}
                      >
                        Eliminar
                      </Button>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(20).keys()].map((x) => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <Button
                        size={'xs'}
                        style={{
                          backgroundColor: '#171717',
                          color: 'white',
                          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                        }}
                        onClick={() => addToOrderHandler(item)}
                      >
                        Agregar a orden
                      </Button>
                    </Grid>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default CartPreviewCard;
