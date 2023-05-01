import React, { useState } from 'react';
import styles from './Login.module.css';
import { Button, Input, Text } from '@nextui-org/react';
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  /*  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleEmail = (e) => {
  };
  const handlePassword = (e) => {
  }; */

  const handleSubmit = async () => {
    const body = JSON.stringify({
      email: '@asth@gmail.com',
      password: 'omaruwu',
    });
    console.log(body);
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    console.log(response.json());
  };

  return (
    <div className={styles.login}>
      <div className={styles.heroImg}>
        <img
          src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/657417-867137095_m1i39p.jpg'
          alt='Headphone img'
        />
      </div>
      <div className={styles.form}>
        <div>
          <Text h1>Hifility</Text>
          <Text h3>Inicia sesión</Text>
        </div>

        <Input
          labelPlaceholder='Email'
          width='13rem'
          value={user.email}
          //onChange={(e) => handleEmail(e)}
        />
        {/* {errorEmail && <Text color='red'>Email is required</Text>} */}
        <Input.Password
          value={user.password}
          labelPlaceholder='Password'
          width='13rem'
          //onChange={(e) => handlePassword(e)}
          initialValue=''
        />
        {/* {errorPassword && <Text color='red'>Password is required</Text>} */}
        <Button onClick={handleSubmit} style={{ backgroundColor: '#2b2a2a' }}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
