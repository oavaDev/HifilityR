import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Products.module.css';

/* const data = [
  {
    _id: { $oid: '6457f86b914207e3f914c7e8' },
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/1_7_16e84831-3fdb-4a19-b448-2ada2600e090.jpg?v=1663150202',
    brand: 'TINHIFI ',
    name: 'T2 DLC',
    subTitle: 'Dual 10mm DLC Dynamic Driver In-Ear Earphones',
    price: '50.15',
    description: [
      'The Upgraded Version of Classic T2 IEM',
      '4th Gen DLC Composite Diaphragm, 10mm Dynamic Driver',
      '5N 8-Core Silver-plated 0.78mm 2Pin Cable',
      'Aviation-grade Aluminum Metal Cavity',
      'Compact and Neat, Comfortable Wearing',
    ],
    rating: ['20', '3'],
    createdAt: {
      $date: { $numberLong: '1667600237654' },
    },
    updatedAt: {
      $date: { $numberLong: '1667600237654' },
    },
    __v: { $numberInt: '0' },
  },
  {
    _id: { $oid: '6457f87b914207e3f914c7e9' },
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/TRIPOWINTC-01_1.jpg?v=1605694283',
    brand: 'TRIPOWIN',
    name: 'TC-01',
    subTitle: '1DD 10mm Si+PU Driver HiFi In-ear Earphone ',
    price: '49.00',
    description: [
      'The driver is a diaphragm with silicon coated on PU',
      'Supreme Quality Metal Shell ',
      'Noise Cancellation & Ergonomics',
    ],
    rating: ['20', '3'],
    createdAt: {
      $date: { $numberLong: '1667600247242' },
    },
    updatedAt: {
      $date: { $numberLong: '1667600247242' },
    },
    __v: { $numberInt: '0' },
  },
  {
    _id: { $oid: '6457f885914207e3f914c7ea' },
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/5_99b91698-08fb-4661-815c-47a8e745c894.jpg?v=1629800987',
    brand: 'KZ',
    name: 'ZS10 PRO',
    subTitle:
      '4BA+1DD 5 Driver in-Ear HiFi Metal Earphones with Stainless Steel Faceplate, 2 Pin Detachable Cable',
    price: '45.00',
    description: [
      'Upgraded 4BA+1DD Hybrid Earphones&Magnetic Dynamic Unit',
      'Exquisite Craft',
      'PCB Frequency Dividing Board',
      'Ergonomic Design & Noise Canceling',
    ],
    rating: ['20', '3'],
    createdAt: { $date: { $numberLong: '1667600283319' } },
    updatedAt: { $date: { $numberLong: '1667600283319' } },
    __v: { $numberInt: '0' },
  },
  {
    _id: { $oid: '6457f892914207e3f914c7eb' },
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/IMG_6706.jpg?v=1662115247',
    brand: 'TRIPOWIN',
    name: 'Cencibel',
    subTitle: 'High-resolution dynamic driver IEM',
    price: '44.10',
    description: [
      'Singularity in Sound',
      'Balanced Tonal Signature',
      '3D Designed and Constructed',
      'Detachable Cable',
    ],
    rating: ['20', '3'],
    createdAt: {
      $date: { $numberLong: '1667600300484' },
    },
    updatedAt: {
      $date: { $numberLong: '1667600300484' },
    },
    __v: { $numberInt: '0' },
  },
  {
    _id: { $oid: '6457f8bc914207e3f914c7ec' },
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/a3f98c6cd74d6a0a20a78a23cafe1827_2048x2048_70437138-2b7d-4f60-94e2-37792a4204ad.jpg?v=1662455620',
    brand: 'NFAUDIO',
    name: 'NA3',
    subTitle: 'Essentials Dynamic Driver Double Cavity In-Ear Monitor',
    price: '62.99',
    description: [
      'Integrated Tuning Circuit',
      'High-performance NIB magnet',
      ' Dual Cavity Design',
      '5u High Polymer Composite Diaphragm ',
      'High-Quality Cable & Multiple Set Of Ear Tips',
    ],
    rating: ['20', '3'],
    createdAt: {
      $date: { $numberLong: '1667600383767' },
    },
    updatedAt: {
      $date: { $numberLong: '1667600383767' },
    },
    __v: { $numberInt: '0' },
  },
  {
    _id: { $oid: '6457f8c9914207e3f914c7ed' },
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/XennsUp6.jpg?v=1624517124',
    brand: 'Mangird',
    name: 'XENNS UP',
    subTitle:
      '2 Electrostatic Driver + 4BA + 1DD Hybrid Driver In-ear Earphone',
    price: '109',
    description: [
      'Hand-painted Faceplate+Resin Shell',
      '6N OCC Silver-plated Detachable Cable',
      '2EST+4BA+1DD Driver ',
    ],
    rating: ['20', '3'],
    createdAt: {
      $date: { $numberLong: '1667600401913' },
    },
    updatedAt: {
      $date: { $numberLong: '1667600401913' },
    },
    __v: { $numberInt: '0' },
  },
]; */

const Products = ({ token }) => {
  
  const [data, setData] = useState([]);

  const retrieveData = async () => {
    const info = await fetch('http://localhost:8080/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
    return info;
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <div className={styles.ProductWrapper}>
      {data &&
        data.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              brand={item.brand}
              name={item.name}
              subtitle={item.subtitle}
              quantity={item.quantity}
              price={item.price}
              description={item.description}
              rating={item.rating}
            />
          );
        })}
    </div>
  );
};

export default Products;
