import React from 'react';
import styles from './Home.module.css';
import RegularCard from '../../components/RegularCard/RegularCard';
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_news}>
        <RegularCard
          footer={'Nueva llegada, Kiwi Ears! Disfruta de los nuevos modelos'}
          img={
            'https://cdn.shopify.com/s/files/1/0040/7201/3924/files/home-cadenza-min.jpg?v=1681121730'
          }
        />
        <RegularCard
          subtitle={'Nuevos in-ears en camino'}
          title={'Thieaudio Monarch'}
          img={
            'https://cdn.shopify.com/s/files/1/0040/7201/3924/files/home-monarch-min.jpg?v=1681121810'
          }
        />
        <RegularCard
          subtitle={'Lo nuevo de TRN '}
          title={'TRN Kirin'}
          img={
            'https://cdn.shopify.com/s/files/1/0040/7201/3924/files/IMG_0684.jpg?v=1662538594'
          }
          height={'30%'}
        />
      </div>
    </div>
  );
};

export default Home;
