import React from 'react';
import styles from './Orders.module.css';
import { Card, Container, Spacer, Text, Col, Grid } from '@nextui-org/react';
const Orders = () => {
  return (
    <div className={styles.order}>
      <Spacer y={2} />
      <Container>
        <Card>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight='bold'
                transform='uppercase'
                color='#ffffffAA'
              >
                ¿Qué tal?
              </Text>
              <Text h4 color='white'>
                En este menú puedes ratrear todos tus pedidos
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620503/HD-DJ-Headphones-Wallpaper-3860258731_gmced3.jpg'
            objectFit='cover'
            width='100%'
            height={340}
            alt='Card image background'
          />
        </Card>
      </Container>
      <Spacer y={3} />
      <Grid.Container gap={2} justify='center'>
        <Grid xs={4}>
          <Card isHoverable variant='bordered'>
            <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight='bold'
                  transform='uppercase'
                  color='#ffffffAA'
                >
                  Haz click para ver tus productos
                </Text>
                <Text h4 color='white'>
                  Ordenes creadas
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/657417-867137095_m1i39p.jpg'
              objectFit='cover'
              width='100%'
              height={340}
              alt='Card image background'
            />
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card isHoverable variant='bordered'>
            <Card.Header
              css={{ position: 'absolute', zIndex: 1, top: 5, left: 5 }}
            >
              <Col>
                <Text
                  size={12}
                  weight='bold'
                  transform='uppercase'
                  color='#ffffffAA'
                >
                  Haz click para ver tus productos enviados
                </Text>
                <Text h4 color='white'>
                  Enviados
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/HiFiMan-HE400se-7-4150916903_uwltoj.jpg'
              objectFit='cover'
              width='100%'
              height={340}
              alt='Card image background'
            />
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card isHoverable variant='bordered'>
            <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight='bold'
                  transform='uppercase'
                  color='#ffffffAA'
                >
                  Haz click para ver tu historial de pedidos
                </Text>
                <Text h4 color='white'>
                  Entregados
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620918/Sundara-4-2488557909_yudzcr.jpg'
              objectFit='cover'
              width='100%'
              height={340}
              alt='Card image background'
            />
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Orders;
