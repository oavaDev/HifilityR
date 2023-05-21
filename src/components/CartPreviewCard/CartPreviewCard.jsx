import React from 'react';
import { itemsInCart } from '../../store/slices/orderSlice';
import { useSelector } from 'react-redux';
import { Grid, Card, Text, Row, Button } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { removeFromOrder } from '../../store/slices/orderSlice';
const CartPreviewCard = () => {
  const list = useSelector(itemsInCart);
  const dipatch = useDispatch();
  const removeHandler = (id) => {
    dipatch(removeFromOrder(id));
  };
  list.length > 0 && console.log(list[0].id);
  return (
    <>
      {list &&
        list.map((item, index) => (
          <Grid style={{ margin: '1rem' }} key={index}>
            <Card isPressable>
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
                css={{ justifyItems: 'flex-start', backgroundColor: '#f5f5f5' }}
              >
                <Row wrap='wrap' justify='space-between' align='center'>
                  <Text style={{ color: '#171717' }} b>
                    {item.name}
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
                      Remove
                    </Button>
                    <Button
                      size={'xs'}
                      style={{
                        backgroundColor: '#171717',
                        color: 'white',
                        boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                      }}
                    >
                      Add to order
                    </Button>
                  </Grid>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
    </>
  );
};

export default CartPreviewCard;
