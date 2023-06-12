import React from 'react';
import { Text } from '@nextui-org/react';
import { TbMoodEmpty } from 'react-icons/tb';
import styles from './Empty.module.css';
const Empty = () => {
  return (
    <div className={styles.Empty}>
      <TbMoodEmpty size={30} color='black' />
      <Text>No hay nada en el carrito :(</Text>
    </div>
  );
};

export default Empty;
