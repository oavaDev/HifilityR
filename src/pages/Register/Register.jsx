import React, { useState } from "react";
import styles from "./Register.module.css";
import { Input, Text } from "@nextui-org/react";
import Buttonn from "../../components/Button/Button";
const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

 

  const handleInput = (e) => {
    const field = e.target.id;
    setUser({ ...user, [field]: e.target.value });
  };

  const handleRegister = async () => {
    await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => {
      window.location.href = '/';
    });
  };

  return (
    <div className={styles.register}>
      <div className={styles.heroImg}>
        <img
          src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/657417-867137095_m1i39p.jpg'
          alt='Headphone img'
        />
      </div>
      <div className={styles.form}>
        <div>
          <Text h1>Hifility</Text>
          <Text h3 style={{ textAlign: 'center' }}>
            Registro
          </Text>
        </div>
        <Input
          labelPlaceholder='Nombre'
          width='13rem'
          value={user.nombre}
          id='name'
          onChange={(e) => handleInput(e)}
        />
        {/* {errorname && <Text color='red'>Nombre is required</Text>} */}
        <Input
          labelPlaceholder='Celular'
          width='13rem'
          id='phone'
          value={user.phone}
          onChange={(e) => handleInput(e)}
        />
        {/* {errorphone && <Text color='red'>Phone is required</Text>} */}
        <Input
          labelPlaceholder='Dirección'
          width='13rem'
          id='address'
          value={user.address}
          onChange={(e) => handleInput(e)}
        />
        {/* {erroraddress && <Text color='red'>Address is required</Text>} */}
        <Input
          labelPlaceholder='Email'
          width='13rem'
          id='email'
          value={user.email}
          onChange={(e) => handleInput(e)}
        />
        {/* {errorEmail && <Text color='red'>Email is required</Text>} */}
        <Input.Password
          value={user.password}
          labelPlaceholder='Password'
          width='13rem'
          id='password'
          onChange={(e) => handleInput(e)}
          initialValue=''
        />
        {/* {errorPassword && <Text color='red'>Password is required</Text>} */}
        <Buttonn onClick={handleRegister} label='register' />
      </div>
    </div>
  );
};

export default Register;
